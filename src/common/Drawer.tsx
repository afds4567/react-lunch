import React from 'react';
type DrawerProps = {
  isOpenDrawer: boolean;
  children: React.ReactNode;
};

class Drawer extends React.Component<DrawerProps> {
  render() {
    return (
      <div className={`modal ${this.props.isOpenDrawer && 'modal--open'}`}>
        <div className="modal-backdrop"></div>
        <div className="modal-container">{this.props.children}</div>
      </div>
    );
  }
}

export default Drawer;
