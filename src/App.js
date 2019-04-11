
import React, { Component } from 'react'
import './App.scss';
import Banner from './components/banner'
import Conheca from './components/Conheca'
import Porque from './components/Porque'
import ConhecaInfos from './components/ConhecaInfos'
import Footer from './components/Footer'
import {Helmet} from 'react-helmet'
import * as API from './utils/api'
import BackToTop from './components/BackToTop'
class App extends Component {

  state = {
    data : {},
    projetos: [],
    meta: {},
    pageTitle: '',
		pageMetaDescription: ''
  }

  componentDidMount() {
    API.get('pages', 'home')
    .then(resp => {
      this.setState({
        data: resp[0].acf,
        meta: resp[0].yoast_meta,
        pageTitle: resp[0].yoast_wpseo_title,
				pageMetaDescription: resp[0].yoast_wpseo_metadesc
      })
  })

    
    API.getProjetos()
    .then(resp => this.setState({projetos: resp }))
  }


  render() {

    return (
      <div className="App">

        <Helmet>
          <meta charSet="utf-8" />
          <title>{this.state.helmet ? this.state.helmet.yoast_wpseo_title : "Home | Mestre Construtor"}</title>
          <link rel="canonical" href={this.state.helmet ? this.state.helmet.yoast_wpseo_canonical : 'https://funilemy.com.br'} />
          <meta description={this.state.helmet ? this.state.helmet.yoast_wpseo_metadesc : "Se não está contente com a geração de leads, o funil de vendas em Y é para você! Tenha mais oportunidades de negócio com a união do inbound e outbound 2.0."}/>
          <meta property="og:url"                content={this.state.helmet ? this.state.helmet.yoast_wpseo_canonical : 'https://funilemy.com.br'} />
          <meta property="og:type"               content="website" />
          <meta property="og:title"              content={this.state.helmet ? this.state.helmet.yoast_wpseo_title : "Funil de vendas em Y | By Layer Up"} />
          <meta property="og:description"        content={this.state.helmet ? this.state.helmet.yoast_wpseo_metadesc : "Se não está contente com a geração de leads, o funil de vendas em Y é para você! Tenha mais oportunidades de negócio com a união do inbound e outbound 2.0."} />
          <meta property="og:image"              content={this.state.helmet ? this.state.shareImage : "http://funil-em-y.siteoficial.ws/api/wp-content/uploads/2019/03/Conteudo-samira-cardoso-funil-y-768x402.jpg"} />
        </Helmet>

        <BackToTop />
        <Banner />
        <Conheca data={this.state.data}/>
        <ConhecaInfos data={this.state.data}/>
        <Porque data={this.state.data}/>
        <Footer />
      </div>
    );
  }
}

export default App;
