import { useContext, useState } from "react";
import { UserAuthContext } from "../../context/UserAuthContext";
import { usersData } from "../../../pseudo_data_base/UsersData";
import LoginButton from "../button/login-button/LoginButton";
import Input from "../input/Input";

function CheckUser({ closeModal }) {
  const { setIsUserLogin } = useContext(UserAuthContext);

  const [user, setUser] = useState({
    nickname: "",
    password: ""
  });

  function clearForm() {
    user.nickname = "";
    user.password = ""
  }

  function checkIn() {
    const res = usersData.filter(item => item.nickname === user.nickname && item.password === user.password)
    Boolean(res.length) ? setIsUserLogin(true) : setIsUserLogin(false)
  }

  return (
    <form className="check__user">
      <div>
        <Input type="text"
          value={user.nickname}
          name="UserNickname"
          placeholder="USER NICKNAME"
          onChange={(event) => setUser({ ...user, nickname: event.target.value })}
        />

        <Input type="password"
          value={user.password}
          name="band"
          placeholder="PASSWORD"
          onChange={(event) => setUser({ ...user, password: event.target.value })}
        />
      </div>
      <LoginButton
        type="submit"
        onClick={(event) => { event.preventDefault(); checkIn(); closeModal(); clearForm() }}
      >LOGIN</LoginButton>
    </form>
  );
}

export default CheckUser;