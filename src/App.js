import React from 'react';

import './App.css';

class App extends React.Component {

	convertToPdf = () => {
        const html = document.getElementById('htmlToConvert').outerHTML;
        const apiKey = 'd58c5c1921b698c9d236fa950ad79a307e78b786a40c57273c9be3c6ab0fb821';
        const url = `https://api.html2pdf.app/v1/generate?html=${html}&apiKey=${apiKey}`;

        return window.open(url);
    }

	render() {
		return (
			<>
				<div id="htmlToConvert">
                    <h1>Hello world!</h1>
                    <p>We want to convert this to a PDF.</p>
                </div>
				<p>But not this!</p>
                <button onClick={this.convertToPdf}>Convert to PDF </button>
      		</>
		);
	}
}

export default App;
