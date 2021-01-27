import http from "./http";
import { apiUrl } from '../config.json';

const apiEndpoint = apiUrl + "/tasks";


export function getTasks(userid) {
  return http.get(`${apiEndpoint}/${userid}`);
}

export function updateTask(task) {
  console.log(task);
  return http.put(`${apiEndpoint}/${task.UserId}/${task.id}`, {});

}

export function createTask(task) {
  return http.post(apiEndpoint, task);
}
