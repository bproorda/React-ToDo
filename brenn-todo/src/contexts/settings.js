import React, { useContext } from 'react';

export const SettingsContext = React.createContext();

export class SettingsProvider extends React.Component{
    constructor(props) {
        super(props); 

        this.state = {
            numberPerPage: 5,
            hideCompleted: true,
        }
    }

    render() {
        return (
          <SettingsContext.Provider value={this.state}>
            {this.props.children}
          </SettingsContext.Provider>
        )
      }
        
}
export default function useSettings() {
    return useContext(SettingsContext);
  }