pipeline {
    agent any 
    stages {
        stage('clone') { 
            steps {
                sh 'cd mean-stack-starter/server' 
            }
        }
        stage('Build dependency') { 
            steps {
                nodejs('nodejs') {
                    sh 'yarn global add forever'
                    sh 'cd mean-stack-starter/server && yarn install' 
                }
            }
        }
        stage('Build app') { 
            steps {
                nodejs('nodejs') {
                    sh 'cd mean-stack-starter/server && yarn run prod' 
                }
            }
        }
      
    }
}