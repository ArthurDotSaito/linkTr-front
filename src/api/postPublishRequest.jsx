import axios from "axios";

export const postPublishRequest = async (postForm) => {
    try {
      const res = axios.post(`${process.env.REACT_APP_API_URL}/algumacoisaqueeuaindanãosei`, postForm)
      const publishAnswer = res;
      return publishAnswer
    }catch(error){
        console.log("Erro ao tentar realizar a publicação de um post no momento de enviar a requisição ao servidor");
        alert(error);
    }
}