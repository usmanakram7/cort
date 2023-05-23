import React, { createContext, PureComponent, useContext } from "react";
import { Storage } from "../../shared/utility";
import { UserInterface } from "../../shared/interfaces";

interface State {
  user: UserInterface;
  isInitialized: boolean;
  isAuthenticated: boolean;
}

interface Context extends State {
  updateUser(user: UserInterface, token?: string): void;
  getLatestUser(): void;
}

export const AuthContext = createContext<Context>(null);
export const useAuthContext = () => useContext(AuthContext);
export class AuthContextProvider extends PureComponent<any, State> {
  state: State = {
    user: null,
    isInitialized: false,
    isAuthenticated: false,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isInitialized: true,
      });
    }, 3000);
    const user = Storage.get("current-user");
    if (user) {
      this.setState({ user, isAuthenticated: true });
      this.getLatestUser();
    }
  }

  getLatestUser(): void {}

  updateUser(user: UserInterface, token?: string) {
    if (user) {
      if (token) {
        Storage.set("access-token", token);
      }
      Storage.set("current-user", user);
      this.setState({
        user,
        isAuthenticated: true,
      });

      // await this.getMetaData();
    } else {
      Storage.clear();

      this.setState({
        user: null,
        isAuthenticated: false,
      });
    }
  }

  render() {
    const context: Context = {
      ...this.state,
      updateUser: this.updateUser.bind(this),
      getLatestUser: this.getLatestUser.bind(this),
    };
    return (
      <AuthContext.Provider value={context}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
