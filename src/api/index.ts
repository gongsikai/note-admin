import axios from 'axios';
import { ElMessage } from "element-plus"

const hostname = location.hostname;

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  console.log('response', response)
  // response.data.msg
  // ElMessage.error('Oops, this is a error message.')
  // if (response.data.msg) ElMessage.error(response.data.msg)
  // if (response.data.status !== 0) return Promise.reject(response.data.msg);
  if (response.data.status !== 0) {
    ElMessage.error(response.data.msg)
    return Promise.reject(response.data.msg);
  }
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

const USER_ADD = ({ name, pass }: { name: string, pass: string, user_uuid: string }) => axios.post(`http://${hostname}:3003/api/user/add`, {
  name,
  pass,
}, {
  headers: {
    token: localStorage.getItem("token")
  }
}).then(res => res.data.data)
const USER_DEL = ({ uuid }: { uuid: string }) => axios.post(`http://${hostname}:3003/api/user/del`, {

  // name,
  // pass,
  // uuid: user_uuid
  uuid
}, {
  headers: {
    token: localStorage.getItem("token")
  }
}).then(res => res.data.data)

// const USER_MODIFY = ({ pass, uuid }: { pass: string, uuid: string }) => axios.post(`http://${hostname}:3003/api/user/mofdify`, {
const USER_MODIFY = ({ pass, uuid }: { pass: string, uuid: string }) => axios.post(`http://${hostname}:3003/api/user/modify`, {
  // name,
  // pass,
  // uuid: user_uuid
  pass,
  uuid
}, {
  headers: {
    token: localStorage.getItem("token")
  }
}).then(res => res.data.data)

const USER_LIST = () => axios.get(`http://${hostname}:3003/api/user/list`, {
  headers: {
    token: localStorage.getItem("token")
  }
}).then(res => res.data.data)

const USER_LOGIN = ({ name, pass }: { name: string, pass: string }) => axios.post(`http://${hostname}:3003/api/user/login`, {
  name,
  pass
}, {
  headers: {
    token: localStorage.getItem("token")
  }
}).then(res => res.data.data)

const USER_LOGIN_ADMIN = ({ name, pass }: { name: string, pass: string }) => axios.post(`http://${hostname}:3003/api/user/login/admin`, {
  name,
  pass
}, {
  headers: {
    token: localStorage.getItem("token")
  }
}).then(res => res.data.data)

const USER_NAME = () => axios.get(`http://${hostname}:3003/api/user/name`, {
  headers: {
    token: localStorage.getItem("token")
  }
}).then(res => res.data.data)

const NOTE_LIST = ({ user_uuid }: { user_uuid: string }) => axios.get(`http://${hostname}:3003/api/note/list`, {
  params: {
    user_uuid
  },
  headers: {
    token: localStorage.getItem("token")
    // user_uuid,
    // user_uuid: user_uuid
  }
}).then(res => res.data.data)

const NOTE_ADD = ({ content, user_uuid }: { content: string, user_uuid: string }) => axios.post(`http://${hostname}:3003/api/note/add`, {
  content,
  user_uuid
}, {
  headers: {
    token: localStorage.getItem("token")
  }
}).then(res => res.data.data)

const NOTE_MODIFY = ({ uuid, content, user_uuid }: { uuid: string, content: string, user_uuid: string }) => axios.post(`http://${hostname}:3003/api/note/modify`, {
  uuid,
  content,
  user_uuid
}, {
  headers: {
    token: localStorage.getItem("token")
  }
}).then(res => res.data.data)

const NOTE_DEL = ({ uuid, user_uuid }: { uuid: string, user_uuid: string }) => axios.post(`http://${hostname}:3003/api/note/del`, {
  uuid,
  user_uuid
}, {
  headers: {
    token: localStorage.getItem("token")
  }
}).then(res => res.data.data)

export default {
  USER: {
    // REGISTER: USER_ADD,
    ADD: USER_ADD,
    DEL: USER_DEL,
    EDIT: USER_MODIFY,
    LIST: USER_LIST,
    LOGIN: USER_LOGIN,
    LOGIN_ADMIN: USER_LOGIN_ADMIN,
    NAME: USER_NAME,
  },
  NOTE: {
    LIST: NOTE_LIST,
    ADD: NOTE_ADD,
    EDIT: NOTE_MODIFY,
    DEL: NOTE_DEL,
  }
}
