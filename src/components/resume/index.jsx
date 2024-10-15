import React from 'react'
import {PDF, PDFContainer, ResumeDownload, ResumeDownloadLink} from './styles'

const Resume = () => (
	<>
		<PDFContainer>
			<PDF type="application/pdf" data="https://docs.google.com/document/d/e/2PACX-1vSoW2mDpl7X3oBq-Xn-kxVUOSwharqgheMsCxFVzdYWpTg3R9YJUHqmHe5EjfRZOTP_rdjYVA2SdPlp/pub?embedded=true" width="800" height="1100"></PDF>
		</PDFContainer>
		<ResumeDownload>
			<ResumeDownloadLink href="https://docs.google.com/document/d/1kR4dyKhPd3i3F8GFFOWf9n7niDfeiWw1EybwNuGNwJo/export?format=pdf">Download Resume</ResumeDownloadLink>
		</ResumeDownload>
	</>
)

export default Resume
