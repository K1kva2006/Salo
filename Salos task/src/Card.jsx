function Card({ firstname, lastname, email, gender, age, job }) {
  return (
    <ul>
      <li>name: {firstname || "name"}</li>
      <li>firstname: {lastname || "lastname"}</li>
      <li>email: {email || "email"}</li>
      <li>gender: {gender || "gender"}</li>
      <li>age: {age || "age"}</li>
      <li>job: {job || "job"}</li>
    </ul>
  );
}

export default Card;
