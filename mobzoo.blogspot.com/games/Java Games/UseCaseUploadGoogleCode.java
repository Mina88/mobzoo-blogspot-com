package protoj.lang.internal.sample.snippet;

import java.io.File;

import joptsimple.OptionParser;
import joptsimple.OptionSet;
import joptsimple.OptionSpec;
import protoj.lang.ArchiveFeature;
import protoj.lang.ClassesArchive;
import protoj.lang.Command;
import protoj.lang.StandardProject;
import protoj.lang.UploadGoogleCodeFeature;

/**
 * A code fragment used to demonstrate uploading artifacts to google code.
 * 
 * @author Ashley Williams
 * 
 */
public final class UseCaseUploadGoogleCode {
        /**
         * Adds configuration to the specified project for creating the classes,
         * source and javadocs acme archives and uploading them to a maven
         * repository.
         * 
         * @param project
         */
        public void addConfig(StandardProject project) {

                // 1. Our google code account project is called acmeproj.
                //
                // That's all there is to it, just provide the project name to the
                // google code feature.

                project.initUploadGoogleCode("acmeproj");

                // 2. We'll just create the classes archive for now.
                //
                // We'll just specify a single classes jar for now although it's easy to
                // add further artifacts, including javadoc, source and tar archives.

                ArchiveFeature archive = project.getArchiveFeature();
                ClassesArchive classes = archive.getClassesArchive();
                classes.addEntry("acme", null, null, null);

                // 3. We want to kick off the upload from the command line.
                //
                // ProtoJ doesn't include a command for uploading projects to google
                // code because there are simply too many options to consider. However
                // it's straight forward to create your own custom command.

                new UploadAcmeCommand(project);
        }

        /**
         * Performs the actual upload to google code, blocking until complete. It
         * may be called in-code from java or from the command set up below.
         * 
         * @param project
         * @param password
         */
        public void uploadArtifact(StandardProject project, String password) {
                ArchiveFeature archive = project.getArchiveFeature();
                UploadGoogleCodeFeature upload = project.getUploadGoogleCodeFeature();
                ClassesArchive classes = archive.getClassesArchive();

                File jar = classes.getEntry("acme").getArchiveEntry().getArtifact();
                upload.uploadArtifact(jar, "acme-1.0.jar", "Featured", "acme project",
                                "bob", password);
        }

        /**
         * A command that calls uploadArtifact() with the google account password.
         */
        public final class UploadAcmeCommand {
                private final Command commandImpl;
                private final OptionSpec<String> passwordOption;

                public UploadAcmeCommand(final StandardProject project) {
                        // adds the new command to the ProtoJ command store
                        commandImpl = project.getCommandStore().addCommand("acmegc", "16m",
                                        new Runnable() {
                                                public void run() {
                                                        // extracts the -password option
                                                        OptionSet options = commandImpl.getOptions();
                                                        uploadArtifact(project, options
                                                                        .valueOf(passwordOption));
                                                }
                                        });
                        commandImpl
                                        .initHelpString("uploads the acme artifact to google code");

                        // tells the runnable to expect a -password command line option
                        OptionParser parser = commandImpl.getParser();
                        passwordOption = parser.accepts("password").withRequiredArg();
                }
        }
}