"use client";

import React, { useEffect, useState } from "react";

import styles from "./quiz-area.module.css";
import clsx from "clsx";
import axios from "axios";
import Success from "./success/success";

const QuizArea = ({ quiz: Quiz, token }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quiz, setQuiz] = useState(Quiz);
  const [success, setSuccess] = useState(false);

  const [time, setTime] = useState(quiz?.quizQuestionTimer);

  useEffect(() => {
    const startTimer = () => {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 2000);

      return () => clearInterval(interval);
    };

    startTimer();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!selectedAnswer && time > 0) return;

    const quizInteraction = async () => {
      const body = {
        token,
        UserPlayerQuizId: quiz?.userPlayerQuizId,
        CurrentQuestionId: quiz?.currentQuestion?.id,
        SelectedAnswerId: selectedAnswer,
        TimeToAnswer: quiz?.quizQuestionTimer,
      };

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/quizInteraction`,
        body
      );

      if (!res.data.data.responseMessage) {
        setQuiz(res.data.data);
        setSelectedAnswer(null);
        setTime(res.data.data?.quizQuestionTimer);
      } else {
        setSuccess({
          url: res.data.data?.responseIconUrl,
          title: res.data.data?.responseMessageTitle,
          subtitle: res.data.data?.responseMessage,
        });
      }
    };

    quizInteraction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAnswer, token, time]);

  if (success) {
    <Success
      url={success.url || ""}
      title={success.title || ""}
      subtitle={success.subtitle || ""}
    />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>{"اختبار القدرات"}</div>
      <div className={styles.wrapper}>
        <span className={clsx("font-sora", styles.time)}>{time}</span>
        <div className={styles.question}>{quiz?.currentQuestion?.title}</div>
        <div className={styles.answer}>
          <div className={styles.box}>
            {quiz?.currentQuestion?.answers?.map((answer) => (
              <div
                key={answer.answerId}
                onClick={() => setSelectedAnswer(answer.answerId)}
                className={clsx(
                  styles.chips,
                  selectedAnswer === answer.answerId && styles.activeChip
                )}
              >
                {answer.answerTitle}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizArea;
