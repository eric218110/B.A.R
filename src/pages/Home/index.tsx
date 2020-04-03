import * as React from 'react'
import { updateTheme } from '../../store/theme/theme.action'
import { ApplicationState } from '../../store';
import { connect } from 'react-redux';
import AppBarComponent from '../../components/AppBar'

const HomePage: React.FC = () => {
  return (
    <React.Fragment>
      <AppBarComponent />
    </React.Fragment>
  );
}

const MapStateToProps = (state: ApplicationState) => ({
  theme: state.theme
})

export default connect(MapStateToProps, { updateTheme })(HomePage);