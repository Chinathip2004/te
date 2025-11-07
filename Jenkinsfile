pipeline {
    agent any

    tools {
        nodejs 'NodeJS 24.10.0'
    }

    stages{
        // stage('Checkout'){
        //     steps {
        //         withCredentials([string(credentialsId: 'CBEsFrontEnd', variable: 'GIT_PAT')]){
        //             git url: "https://${GIT_PAT}@github.com/Chinathip2004/CBEsFrontEnd.git", branch: 'main'
        //         }
        //     }
        // }
        stage('Install Dependencies'){
            steps {
                sh 'npm install'
            }
        }
        stage('Build'){
            steps {
                sh 'npm run build'
            }
        }
        stage('Build Docker Image'){
            steps {
                script {
                    sh '''
                    echo "Building Docker image..."
                    docker build -t my-frontend-app .
                    '''
                }
            }
        }
        stage('Deploy'){
            steps {
                sh '''
                echo "Deploying container..."
                docker stop vue-app || true
                docker rm vue-app || true
                docker run -d --name vue-app -p 4080:80 my-frontend-app
                '''
            }
        }
    }

    post {
        always{
            cleanWs()
        }
    }
}