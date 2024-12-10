# Playwright 102 Certificarion Assignment execution using HyperExecute

## Pre-requisites
  Before using HyperExecute, you have to download HyperExecute CLI corresponding to the host OS. Along with it, you also need to export the environment variables LT_USERNAME and   
  LT_ACCESS_KEY that are available in the LambdaTest Profile page.

## Download HyperExecute CLI
  HyperExecute CLI is the CLI for interacting and running the tests on the HyperExecute Grid. The CLI provides a host of other useful Tests that accelerate test execution. In order to    trigger tests using the CLI, you need to download the HyperExecute CLI binary corresponding to the platform (or OS) from where the tests are triggered:

Also, it is recommended to download the binary in the project's parent directory. Shown below is the location from where you can download the HyperExecute CLI binary:
  * Mac: https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute
  * Linux: https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute
  * Windows: https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe
  
## Configure Environment Variables
  Before the tests are run, please set the environment variables LT_USERNAME & LT_ACCESS_KEY from the terminal. 
  The account details are available on your LambdaTest Profile page.

    For macOS:
      export LT_USERNAME=LT_USERNAME
      export LT_ACCESS_KEY=LT_ACCESS_KEY

    For Linux:
      export LT_USERNAME=LT_USERNAME
      export LT_ACCESS_KEY=LT_ACCESS_KEY

    For Windows:
      set LT_USERNAME=LT_USERNAME
      set LT_ACCESS_KEY=LT_ACCESS_KEY


## Test Execution
  The CLI option --config is used for providing the custom HyperExecute YAML file (i.e. Hyperexecute.yaml). 
    Run the following command on the terminal to trigger the tests in JS files on the HyperExecute grid. 
    The --download-artifacts option is used to inform HyperExecute to download the artifacts for the job.
    
    ./hyperexecute --user $LT_USERNAME --key $LT_ACCESS_KEY --config Hyperexecute.yaml
  

