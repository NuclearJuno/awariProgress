const posts = [
    {
        title: 'Dorohedoro',
        content: "Dorohedoro é um anime que mistura elementos de ação e horror, ambientado em um mundo sombrio e bizarro. A história segue o personagem Caiman em sua jornada para descobrir sua identidade após ter sua cabeça transformada em um réptil."
    },
    {
        title: 'Bleach',
        content: "Bleach é um anime de aventura e fantasia que gira em torno de Ichigo Kurosaki, um adolescente com a habilidade de ver espíritos. Ele acidentalmente obtém os poderes de um Ceifador de Almas e embarca em missões para proteger os vivos e os espíritos."
    },
    {
        title: 'Mushishi',
        content: "Mushishi é um anime contemplativo que explora as interações entre humanos e seres místicos chamados Mushi. O protagonista, Ginko, viaja pelo Japão, lidando com casos envolvendo Mushi e ajudando as pessoas a entenderem essas criaturas misteriosas."
    }
];

const wrapper = document.getElementById('posts');

for (var i = 0; i < posts.length; i++) {
    const postData = posts[i];
    console.log(postData);

    const article = document.createElement('article');
    article.classList.add('article');

    const title = document.createElement('h2');
    title.classList.add('article-title');
    const titleText = document.createTextNode(postData.title);
    title.appendChild(titleText);
    article.appendChild(title);

    const content = document.createElement('p');
    const contentText = document.createTextNode(postData.content);
    content.appendChild(contentText);
    article.appendChild(content);

    wrapper.appendChild(article);
}