import { useRouter } from "next/router";
function NewId() {
  const router = useRouter();
  console.log(router.query.newsId);
  return <h1>NewId</h1>;
}
export default NewId;
