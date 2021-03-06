import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserPreferencesStore from '../../stores/UserPreferencesStore';
import de from './de.json';
import am from './am.json';

class Translate extends Component{

	constructor(props){
		super(props);
		this.state ={
			text: this.props.text,
			defaultPrefLanguage: UserPreferencesStore.getPrefLang()
		}
	}

	changeLanguage = (text) => {
        this.setState({
            text:text
        })
  }

  componentDidMount() {
    let defaultPrefLanguage = this.state.defaultPrefLanguage;
    var arrDe = Object.keys(de);
    var arrAm = Object.keys(am);
    let text = this.state.text;
    if(defaultPrefLanguage!=='en-US'){
      for (let key=0;key<arrDe.length;key++) {
          if (arrDe[key]===text) {
              this.changeLanguage(de[arrDe[key]]);
          }
        }
      for (let key=0;key<arrAm.length;key++) {
          if (arrAm[key]===text) {
              this.changeLanguage(am[arrAm[key]]);
          }
        }
  }
}
  render() {
  	return <span>{this.state.text}</span>
  }

}


Translate.propTypes = {
	text:PropTypes.string
}
export default Translate;
