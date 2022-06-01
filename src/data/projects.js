import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const PROJECTS = [
    {
        id: 1,
        title: 'Example Java Application',
        description: 'A Java SpringBoot web project that i built!',
        link: 'https://github.com/benjiTKJ/Java-WebApp/tree/main/first-web-app',
        image: project1
    },
    {
        id: 2,
        title: 'Example Terraform infra',
        description: 'An example terraform code to spin up 1 ubuntu EC2 on AWS',
        link: 'https://github.com/benjiTKJ/TerraformRepo',
        image: project2
    },
    {
        id: 3,
        title: 'Bootstrap react app',
        description: 'Use this bootstrap react app to kickstart your react application quick',
        link: 'https://github.com/benjiTKJ/React-Bootstrap-2019',
        image: project3
    }
];

export default PROJECTS;