pipeline {
     agent any
     environment {
        CI = 'true' 
    }
     stages {
         stage('Build') {
             steps {
                 sh 'echo "Build Start"'
                 sh 'npm install --loglevel verbose'
                 sh 'npm run build'
             }
         }
         stage('Lint') {
              steps {
                  sh 'npm run lint'
              }
         }
         stage('Test') {
              steps {
                  sh 'npm test'
              }
         }
         stage('Upload to AWS') {
            steps {
                withAWS(region:'us-west-2', credentials:'aws-static') {
                    s3Upload(pathStyleAccessEnabled:true, payloadSigningEnabled: true, workingDir:'build', includePathPattern:'**/*', bucket:'react-app-hosting-bucket')
                }
            }
        }
     }
}