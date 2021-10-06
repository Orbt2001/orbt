/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import style from '../home/style.module.css'
import res from '../home/responsive.module.css'
/* Images */
import profilePic from '/public/orbtwh.svg'
import orbitSvg from '/public/orbita.svg'
import work1 from '/public/work1.jpg'
import work2 from '/public/work2.jpg'
import facebook from '/public/facebook.webp'
import instagram from '/public/instagram.webp'
import github from '/public/github.webp'

const Home: NextPage = () => {
	{
		/* 
	async function handleOnSubmit(e) {
		e.preventDefault()

		const formData = {}

		Array.from(e.currentTarget.elements).forEach(field => {
			if (!field.name) return
			formData[field.name] = field.value
		})

		fetch('./api/mail', {
			method: 'POST',
			body: JSON.stringify(formData),
		})
		console.log(formData)
	}*/
	}

	return (
		<>
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
					rel="stylesheet"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link
					rel="mask-icon"
					href="/safari-pinned-tab.svg"
					color="#5bbad5"
				/>
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<title>Orbt</title>
			</Head>
			<div className={style.main}>
				{/* NAV */}
				<nav className={style.nav}>
					<div className={style.link}>
						<Image
							src={profilePic}
							alt="Logo"
							height="70"
							width=""
						/>
					</div>
					<ul className={style.ul}>
						<li className={style.active}>
							<a href="#home">Home</a>
						</li>
						<li>
							<a href="#sobre">Sobre</a>
						</li>
						<li>
							<a href="#plano">Planos</a>
						</li>
						<li>
							<a href="#contato">Contato</a>
						</li>
					</ul>
				</nav>
			</div>
			{/* Home */}
			<div id="home" className={style.home}>
				<div className={style.grid}>
					<div className={style.imgorbta}>
						<Image src={orbitSvg} alt="Logo" />
					</div>
					<div className={style.textbv}>
						<h1>Seja Bem Vindo!</h1>
						<p>
							A orbt lhe oferece ótimos serviços, como
							desenvolvimento <br /> de sites, manutenção de
							computadores e redes, gerencia
							<br />
							mento das midias sociais da sua empresa e a criação
							e <br /> desenvolvimento de logos e designes para
							sua empresa.
						</p>
						<button className={style.buttonh}>
							<a href="">Saiba Mais</a>
						</button>
					</div>
				</div>
			</div>
			{/* Sobre */}
			<div className={style.sobre_title}>
				<div id="sobre" className={style.title}>
					<h2>SOBRE NÓS</h2>
				</div>
			</div>

			<div className={style.sobre}>
				<p>
					A orbt é uma empresa recem chegada no mercado da tecnologia,
					que vem buscando trazer web sites e aplicativos com um
					design simples, bonito e que retrate a empresa e ao mesmo
					tempo um site completo, rápido e responsivo, com o SEO
					configurado e tudo mais que você possa ter direito.
					Trabalhamos para optimizar e melhorar a experiência da
					empresa com as novidades, sempre buscamos inovar e sempre
					manter nossos projetos atualizados e com ótima
					funcionalidade e velocidade. Além disso sempre buscamos
					ouvir nossos clientes e trabalhar em conjunto para que o
					site fique com a cara da empresa e que os clientes de tal
					tenham um experiência fantástica.
				</p>
			</div>
			{/* Planos */}
			<div id="plano" className={style.planos}>
				<div className={style.title}>
					<h3>planos</h3>
				</div>
				<div className={style.grid}>
					<div className={style.plano1}>
						<h2>Institucional</h2>
						<p>Web Site 1</p>
						<li>Web Site Personalizado</li>
						<li>Site Único, Especialmente Para Sua Empresa</li>
						<li>Design Inovador e Totalmente Atualizado</li>
						<li>Atualizações Sempre Que Precisar</li>
						<li>Suporte 7/24</li>
						<button className={style.buttonp}>
							<a href="">Orçamento</a>
						</button>
						<span>R$100.00/m</span>
					</div>
					<div className={style.plano2}>
						<h2>e-commerce</h2>
						<p>Web Site 2</p>
						<li>Web Site Personalizado</li>
						<li>Site Único, Especialmente Para Sua Empresa</li>
						<li>Design Inovador e Totalmente Atualizado</li>
						<li>Atualizações Sempre Que Precisar</li>
						<li>Suporte 7/24</li>
						<button className={style.buttond}>Orçamento</button>
						<span>R$250.00/m</span>
					</div>
				</div>
			</div>

			{/* Trabalhos */}
			<div className={style.works_title}>
				<div className={style.title}>
					<h2>trabalhos</h2>
				</div>
			</div>
			<div className={style.gridw}>
				<div className={style.work1}>
					<Image src={work1} alt="Work1" width="650" height="500" />
				</div>
				<div className={style.text1}>
					<h3>Indesfer</h3>
					<p>
						An example of where you can put an image of a project,
						or anything else, along with a description.
					</p>
				</div>
				<div className={style.work2}>
					<Image src={work2} alt="Work2" width="650" height="500" />
				</div>
				<div className={style.text2}>
					<h3>Empresa 2</h3>
					<p>
						An example of where you can put an image of a project,
						or anything else, along with a description.
					</p>
				</div>
			</div>

			{/* Contato */}
			<div id="contato" className={style.contato}>
				<div className={style.title}>
					<h3>Contato</h3>
				</div>
				<div className={style.contatof}>
					<h2>Preencha o Formulário</h2>
					<p>Preencha os campos abaixo para fazer um orçamento</p>
					{/* <form method="POST" onSubmit={handleOnSubmit}> */}
					<form>
						<div className={style.gridcontato}>
							<div className={style.inputst}>
								<div className={style.input1}>
									<input
										type="text"
										name="name"
										placeholder="nome completo"
									/>
								</div>
								<div className={style.input1}>
									<input
										className={style.input2}
										type="text"
										name="email"
										placeholder="username@email.com"
									/>
								</div>
							</div>
							<div className={style.mensagem}>
								<textarea
									name="message"
									placeholder="escreva sua mensagem..."
								></textarea>
							</div>
							<button className={style.buttonf} type="submit">
								Enviar
							</button>
						</div>
					</form>
				</div>
			</div>
			{/* Blocquote */}
			<blockquote className={style.blockquote}>
				“Seja uma referência de qualidade. Algumas pessoas não estão
				acostumadas a um ambiente em que a excelência é esperada. ”
				<span>Steve Jobs</span>
			</blockquote>
			{/* Footer */}
			<footer className={style.footer}>
				<div className={style.navf}>
					<li>
						<a href="">Home</a>
					</li>
					<li>
						<a href="">Sobre</a>
					</li>
					<li>
						<a href="">Planos</a>
					</li>
					<li>
						<a href="">Contato</a>
					</li>
				</div>
				<div className={style.linel}>
					<p>
						A orbt é uma empresa recem chegada no mercado da
						tecnologia, que vem buscando trazer web sites e
						aplicativos com um design simples, bonito e que retrate
						a empresa e ao mesmo tempo um site completo, rápido e
						responsivo, com o SEO configurado e tudo mais que você
						possa ter direito. Trabalhamos para optimizar e melhorar
						a experiência da empresa com as novidades, sempre
						buscamos inovar e sempre manter nossos projetos
						atualizados e com ótima funcionalidade e velocidade.
					</p>
				</div>

				<div className={style.redes}>
					<a href="">
						<Image
							src={facebook}
							alt="facebook"
							width="30"
							height="30"
							id="image"
						/>
					</a>
					<a href="">
						<Image
							src={instagram}
							alt="Instagram"
							width="30"
							height="30"
						/>
					</a>
					<a href="">
						<Image
							src={github}
							alt="Github"
							width="30"
							height="30"
						/>
					</a>
				</div>
			</footer>
			<div className={style.copy}>
				<span>
					Copyright © 2020, Todos direitos reservados
					<a href=""> Orbt</a>
				</span>
			</div>
		</>
	)
}

export default Home
