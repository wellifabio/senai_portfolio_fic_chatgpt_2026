const projectList = document.querySelector('#project-list');
const challengeList = document.querySelector('#challenge-list');
const studentList = document.querySelector('#student-list');
const searchInput = document.querySelector('#student-search');
const emptyState = document.querySelector('#empty-state');

const initials = (name) => name.split(' ').map((part) => part[0]).slice(0, 2).join('').toUpperCase();
const githubName = (url) => url.replace('https://github.com/', '').replace(/\/$/, '');

async function loadPortfolio() {
	try {
		const response = await fetch('projetos.json');
		if (!response.ok) throw new Error('Dados indisponíveis');
		const data = await response.json();
		renderStats(data);
		renderProjects(data.projetos);
		renderChallenges(data.desafios);
		renderStudents(data.githubs);
		searchInput.addEventListener('input', () => {
			const query = searchInput.value.toLowerCase().trim();
			renderStudents(data.githubs.filter((student) => student.aluno.toLowerCase().includes(query)));
		});
	} catch (error) {
		projectList.innerHTML = '<p class="empty-state">Não foi possível carregar os projetos agora.</p>';
	}
}

function renderStats(data) {
	document.querySelector('#project-count').textContent = data.projetos.length;
	document.querySelector('#challenge-count').textContent = data.desafios.length;
	document.querySelector('#student-count').textContent = data.githubs.length;
}

function renderProjects(projects) {
	projectList.innerHTML = projects.map((project, index) => `<a class="project-card" href="${project.link}" target="_blank" rel="noreferrer"><div class="card-top"><span>PROJETO ${String(index + 1).padStart(2, '0')}</span><span>↗</span></div><h3>${project.projeto}</h3><span class="card-link">abrir projeto</span></a>`).join('');
}

function renderChallenges(challenges) {
	challengeList.innerHTML = challenges.map((challenge, index) => `<a class="challenge-item" href="${challenge.link}" target="_blank" rel="noreferrer"><span class="challenge-number">${String(index + 1).padStart(2, '0')}</span><strong>${challenge.aluno}</strong><span class="challenge-arrow">↗</span></a>`).join('');
}

function renderStudents(students) {
	emptyState.hidden = students.length > 0;
	studentList.innerHTML = students.map((student) => `<article class="student-card"><span class="avatar">${initials(student.aluno)}</span><div class="student-info"><strong>${student.aluno}</strong><a href="${student.github}" target="_blank" rel="noreferrer">@${githubName(student.github)}</a></div><div class="student-links"><a href="${student.github}" target="_blank" rel="noreferrer" aria-label="GitHub de ${student.aluno}">⌘</a><a href="${student.portfolio}" target="_blank" rel="noreferrer" aria-label="Portfólio de ${student.aluno}">↗</a></div></article>`).join('');
}

loadPortfolio();
