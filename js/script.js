document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-mobile');
    const navList = document.querySelector('nav ul');
    
    menuBtn.addEventListener('click', function() {
        navList.classList.toggle('show');
    });
    
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navList.classList.remove('show');
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    const campanhasMensais = {
        '01': {
            titulo: 'Janeiro Branco - Saúde Mental',
            descricao: 'O Futura Laboratório apoia a campanha Janeiro Branco, dedicada à conscientização sobre a importância da saúde mental. Realizamos exames que ajudam no diagnóstico e acompanhamento de condições relacionadas à saúde mental.',
            imagem: 'imagemJaneiro.jpg'
        },
        '02': {
            titulo: 'Fevereiro Laranja - Leucemia',
            descricao: 'No mês de conscientização sobre a leucemia, oferecemos condições especiais para exames de hemograma completo e outros relacionados ao diagnóstico e acompanhamento desta condição.',
            imagem: 'imagemFevereiro.jpg'
        },
        '03': {
            titulo: 'Março Azul - Câncer Colorretal',
            descricao: 'Apoiamos a campanha de prevenção ao câncer colorretal. Exames de sangue oculto nas fezes e outros relacionados estão com condições especiais durante este mês.',
            imagem: 'imagemMarço.jpg'
        },
        '04': {
            titulo: 'Abril Azul - Conscientização do Autismo',
            descricao: 'O autismo é uma condição neurológica que afeta a comunicação e o comportamento. O diagnóstico precoce é fundamental para o desenvolvimento das crianças no espectro. Durante todo o mês de abril, estamos oferecendo condições especiais para exames relacionados ao diagnóstico e acompanhamento do autismo.',
            imagem: '../img/autismo.jpg'
        },
        '05': {
            titulo: 'Maio Amarelo - Segurança no Trânsito',
            descricao: 'Apoiamos a campanha Maio Amarelo pela segurança no trânsito. Exames toxicológicos e outros relacionados estão com condições especiais este mês.',
            imagem: 'imagemMaio.jpg'
        },
        '06': {
            titulo: 'Junho Vermelho - Doação de Sangue',
            descricao: 'No mês de incentivo à doação de sangue, oferecemos exames gratuitos de tipagem sanguínea e hemoglobina para doadores.',
            imagem: 'imagemJunho.jpg'
        },
        '07': {
            titulo: 'Julho Amarelo - Hepatites Virais',
            descricao: 'Conscientização sobre as hepatites virais. Exames para diagnóstico de hepatite A, B e C com condições especiais durante todo o mês.',
            imagem: 'imagemJulho.jpg'
        },
        '08': {
            titulo: 'Agosto Dourado - Aleitamento Materno',
            descricao: 'Apoio à campanha de incentivo ao aleitamento materno. Exames para mães e bebês com condições especiais.',
            imagem: 'imagemAgosto.jpg'
        },
        '09': {
            titulo: 'Setembro Amarelo - Prevenção ao Suicídio',
            descricao: 'Apoiamos a campanha Setembro Amarelo de prevenção ao suicídio. Exames que ajudam no diagnóstico de condições relacionadas à saúde mental estão com condições especiais.',
            imagem: 'imagemSetembro.jpg'
        },
        '10': {
            titulo: 'Outubro Rosa - Câncer de Mama',
            descricao: 'Durante o Outubro Rosa, oferecemos condições especiais para exames relacionados ao diagnóstico e acompanhamento do câncer de mama.',
            imagem: 'imagemOutubro.jpg'
        },
        '11': {
            titulo: 'Novembro Azul - Câncer de Próstata',
            descricao: 'No mês de conscientização sobre o câncer de próstata, oferecemos condições especiais para exames de PSA e outros relacionados.',
            imagem: 'imagemNovembro.jpg'
        },
        '12': {
            titulo: 'Dezembro Vermelho - Luta contra a AIDS',
            descricao: 'Apoio à campanha de prevenção e combate à AIDS. Exames de HIV com condições especiais durante todo o mês.',
            imagem: 'imagemDezembro.jpg'
        }
    };
    function atualizarCampanha() {
        const dataAtual = new Date();
        const mesAtual = (dataAtual.getMonth() + 1).toString().padStart(2, '0');
        const campanha = campanhasMensais[mesAtual];
        
        if (campanha) {
            const campanhaContainer = document.querySelector('.campanha-atual');
            if (campanhaContainer) {
                campanhaContainer.innerHTML = `
                    <img src="images/${campanha.imagem}" alt="${campanha.titulo}">
                    <div class="campanha-texto">
                        <h3>${campanha.titulo}</h3>
                        <p>${campanha.descricao}</p>
                        <a href="https://wa.me/5582999534040" class="btn-saiba-mais">Saiba mais</a>
                    </div>
                `;
            }
        }
    }
    atualizarCampanha();
    window.addEventListener('scroll', function() {
        const elements = document.querySelectorAll('.exame-categoria, .servico-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
             if (elementPosition < screenPosition) {
                element.classList.add('ativo');
            }
        });
    });
});