import React from 'react';
import { Icon, Layout, MenuItem, OverflowMenu, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
   import auth from '@react-native-firebase/auth';

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back'/>
);

// const EditIcon = (props) => (
//   <Icon {...props} name='edit'/>
// );

const Logout = () =>{

auth()
  .signOut()
  .then(() => console.log('User signed out!'));
}

const MenuIcon = (props) => (
  <Icon {...props} name='more-vertical'/>
);

const InfoIcon = (props) => (
  <Icon {...props} name='info'/>
);

const LogoutIcon = (props) => (
  <Icon {...props} name='log-out'/>
);

export const NavBar = () => {

  const [menuVisible, setMenuVisible] = React.useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={toggleMenu}/>
  
  );

  const renderRightActions = () => (
    <React.Fragment>
      {/* <TopNavigationAction icon={EditIcon}/> */}
      <OverflowMenu
        anchor={renderMenuAction}
        visible={menuVisible}
        onBackdropPress={toggleMenu}>

        <MenuItem onPress={Logout} accessoryLeft={LogoutIcon} title='Logout'/>
        <MenuItem accessoryLeft={InfoIcon} title='About'/>
      </OverflowMenu>
    </React.Fragment>
  );

  const renderBackAction = () => (
    <TopNavigationAction icon={BackIcon}/>
  );

  return (
    <Layout style={styles.container} level='2'>
      <TopNavigation
        alignment='center'
        title='Macros'
        subtitle='your personal health assistent'
        accessoryLeft={renderBackAction}
        accessoryRight={renderRightActions}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 128,
  },
});