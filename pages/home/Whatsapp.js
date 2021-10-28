/* eslint-disable @next/next/no-img-element */
import React from 'react'
import style from '../home/style.module.css'

export const Whatsapp = () => {
	return (
		<div className={style.whatfloat}>
			<a href="https://api.whatsapp.com/send?phone=5516996135250&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento">
				<img src="601.png" alt="Abner" height="80" />
				<p>
					Abner Ananias <br />
					(16) 99613-5250
				</p>
			</a>
			<a href="https://api.whatsapp.com/send?phone=5516994009055&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento">
				<img src="602.png" alt="Gabriel" height="80" />
				<p>
					Gabriel Laroca <br />
					(16) 99400-9055
				</p>
			</a>
			<a href="https://api.whatsapp.com/send?phone=5516997570850&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento">
				<img src="603.png" alt="Lucas" height="80" />
				<p>
					Lucas Lima <br />
					(16) 99757-0850
				</p>
			</a>
		</div>
	)
}

export default Whatsapp
