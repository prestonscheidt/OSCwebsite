document.addEventListener('DOMContentLoaded', function () {
    const projects = [
        {
            title: 'Streamlined Packaging Organization Service for Bags of Love',
            description: 'Project description goes here...',
        },
        {
            title: 'Donor Data Cleanup and UI/UX for UO Foundation',
            description: 'Project description goes here...',
        },
    ];

    const projectsContainer = document.getElementById('projects-container');

    projects.forEach((project) => {
        const projectArticle = document.createElement('article');
        const projectTitle = document.createElement('h3');
        const projectDescription = document.createElement('p');

        projectTitle.textContent = project.title;
        projectDescription.textContent = project.description;

        projectArticle.appendChild(projectTitle);
        projectArticle.appendChild(projectDescription);

        projectsContainer.appendChild(projectArticle);
    });
});
