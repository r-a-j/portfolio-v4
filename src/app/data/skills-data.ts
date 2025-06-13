import { SkillCategory } from "../shared/types/skill-category";

export const SKILLS: SkillCategory[] = [
    {
        name: 'Programming Languages',
        technologies: [
            { name: 'Python', link: 'https://www.python.org', image: 'technologies/python.svg' },
            { name: 'Java', link: 'https://www.java.com', image: 'technologies/java.svg' },
            { name: 'C#', link: 'https://learn.microsoft.com/en-us/dotnet/csharp/', image: 'technologies/csharp.svg' },
        ],
    },
    {
        name: 'Frontend Development',
        technologies: [
            { name: 'Angular', link: 'https://angular.io', image: 'technologies/angular.svg' },
            { name: 'Ionic', link: 'https://ionicframework.com', image: 'technologies/ionic.svg' },
            { name: 'HTML', link: 'https://www.w3.org/html/', image: 'technologies/html5.svg' },
            { name: 'SASS', link: 'https://sass-lang.com', image: 'technologies/sass.svg' },
            { name: 'CSS', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS', image: 'technologies/css3.svg' },
            { name: 'TypeScript', link: 'https://www.typescriptlang.org/', image: 'technologies/typescript.svg' },
            { name: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', image: 'technologies/javascript.svg' },
            { name: 'Jquery', link: 'https://jquery.com', image: 'technologies/jquery.svg' },
        ],
    },
    {
        name: 'Backend Frameworks',
        technologies: [
            { name: 'Spring Boot', link: 'https://spring.io/', image: 'technologies/spring.svg' },
            { name: '.Net Core', link: 'https://dotnet.microsoft.com/', image: 'technologies/dotnetcore.svg' },
        ],
    },
    {
        name: 'Version Control & CI/CD',
        technologies: [
            { name: 'Git', link: 'https://git-scm.com/', image: 'technologies/git.svg' },
            { name: 'GitHub', link: 'https://github.com/r-a-j', image: 'technologies/github.svg' },
            { name: 'Microsoft Azure', link: 'https://azure.microsoft.com/en-in/', image: 'technologies/azure.svg' },
            { name: 'Subversion', link: 'https://subversion.apache.org/', image: 'technologies/subversion.svg' },
        ],
    },
    {
        name: 'Databases',
        technologies: [
            { name: 'Microsoft SQL', link: 'https://www.microsoft.com/en-us/sql-server', image: 'technologies/microsoftsqlserver.svg' },
            { name: 'PostgreSQL', link: 'https://www.postgresql.org/', image: 'technologies/postgresql.svg' },
        ],
    },
    {
        name: 'Data Science & Machine Learning',
        technologies: [
            { name: 'TensorFlow', link: 'https://www.tensorflow.org', image: 'technologies/tensorflow.svg' },
            { name: 'PyTorch', link: 'https://pytorch.org/', image: 'technologies/pytorch.svg' },
            { name: 'Pandas', link: 'https://pandas.pydata.org/', image: 'technologies/pandas.svg' },
            { name: 'Scikit-learn', link: 'https://scikit-learn.org/', image: 'technologies/scikitlearn.svg' },
            { name: 'Scipy', link: 'https://scipy.org/', image: 'technologies/scipy.svg' },
            { name: 'Matplotlib', link: 'https://matplotlib.org/', image: 'technologies/matplotlib.svg' },
            { name: 'Keras', link: 'https://keras.io/', image: 'technologies/keras.svg' },
            { name: 'Numpy', link: 'https://numpy.org/', image: 'technologies/numpy.svg' },
            { name: 'Seaborn', link: 'https://seaborn.pydata.org/', image: 'technologies/seaborn.svg' },
        ],
    },
    {
        name: 'Tools & Platforms',
        technologies: [
            { name: 'PyCharm', link: 'https://www.jetbrains.com/pycharm/', image: 'technologies/pycharm.svg' },
            { name: 'WebStorm', link: 'https://www.jetbrains.com/webstorm', image: 'technologies/webstorm.svg' },
            { name: 'VS Code', link: 'https://code.visualstudio.com/', image: 'technologies/vscode.svg' },
            { name: 'Visual Studio', link: 'https://visualstudio.microsoft.com/', image: 'technologies/visualstudio.svg' },
            { name: 'Android Studio', link: 'https://developer.android.com/studio', image: 'technologies/androidstudio.svg' },
            { name: 'Postman', link: 'https://www.postman.com', image: 'technologies/postman.svg' },
            { name: 'Swagger', link: 'https://swagger.io/', image: 'technologies/swagger.svg' },
        ],
    },
]