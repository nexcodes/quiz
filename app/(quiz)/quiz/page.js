import styles from "./quiz.module.css";
import QuizArea from "./_components/quiz-area";
import startQuiz from "@/actions/startQuiz";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export default async function Quiz() {
  const session = await getServerSession(authOptions);

  const quiz = await startQuiz(session.token);

  return (
    <>
    <div className={styles.bg}>
      <QuizArea quiz={quiz} token={session.token} />
    </div>
    </>
  );
}
