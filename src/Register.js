import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");

  const navigate = useNavigate();

  // validation part
  const isValdate = () => {
    let isProced = true;
    let errorMsg = "Please enter the value in ";
    if (username == null || username == "") {
      isProced = false;
      errorMsg += "username ";
    }
    if (Password == null || Password == "") {
      isProced = false;
      errorMsg += "password ";
    }
    if (fullname == null || fullname == "") {
      isProced = false;
      errorMsg += "fullname ";
    }
    if (email == null || email == "") {
      isProced = false;
      errorMsg += "email ";
    }
    if (phone == null || phone == "") {
      isProced = false;
      errorMsg += "phone ";
    }
    if (country == null || country == "") {
      isProced = false;
      errorMsg += "country ";
    }
    if (address == null || address == "") {
      isProced = false;
      errorMsg += "address ";
    }
    if (gender == null || gender == "") {
      isProced = false;
      errorMsg += "gender";
    }
    if (!isProced) {
      toast.warning(errorMsg);
    } else {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      } else {
        isProced = false;
        toast.warning("please enter valid email");
      }
    }
    return isProced;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const regObj = {
      username,
      Password,
      fullname,
      email,
      phone,
      country,
      address,
      gender,
    };
    if (isValdate()) {
      console.log(regObj);
      fetch("http://localhost:8000/user", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regObj),
      }).then((res) => {
        toast.success("Registered successfully.");
        navigate("/login");
      });
    }
  };
  return (
    <div>
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={handleSubmit}>
          <div className="card">
            <div className="card-header">
              <h1>User Rigisteration</h1>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      UserName<span className="errMsg">*</span>
                    </label>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Password<span className="errMsg">*</span>
                    </label>
                    <input
                      type="password"
                      value={Password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      FullName<span className="errMsg">*</span>
                    </label>
                    <input
                      type="text"
                      value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Email<span className="errMsg">*</span>
                    </label>
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Phone<span className="errMsg">*</span>
                    </label>
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Country<span className="errMsg">*</span>
                    </label>
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="form-control"
                    >
                      <option value="india">India</option>
                      <option value="usa">Usa</option>
                      <option value="canada">Canada</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>
                      Address<span className="errMsg">*</span>
                    </label>
                    <textarea
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="form-control"
                    ></textarea>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Gender</label>
                    <br></br>
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={gender === "male"}
                      onChange={(e) => setGender(e.target.value)}
                      className="app-check"
                    ></input>
                    <label>Male</label>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      onChange={(e) => setGender(e.target.value)}
                      checked={gender === "female"}
                      className="app-check"
                    ></input>
                    <label>Female</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary" name="submit">
                Register
              </button>
              <a className="btn btn-danger">Back</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
