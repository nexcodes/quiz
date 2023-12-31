"use client";

import React, { useEffect, useState } from "react";

import styles from "./quiz-area.module.css";
import clsx from "clsx";
import axios from "axios";
import Success from "./success/success";

const QuizArea = ({ quiz: Quiz, token }) => {
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState(false);

  const [quiz, setQuiz] = useState(Quiz);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const [time, setTime] = useState(quiz?.quizQuestionTimer);

  useEffect(() => {
    const startTimer = () => {
      var interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(interval);
    };

    startTimer();

    if (time <= 0) {
      clearInterval(interval);
    }
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

      if (res.data.data?.currentQuestion?.id != 0) {
        setQuiz(res.data.data);
        setSelectedAnswer(null);
        setTime(res.data.data?.quizQuestionTimer);
      } else {
        setSuccess(true);
        setData({
          url: res.data.data?.responseIconUrl,
          title: res.data.data?.responseMessageTitle,
          subtitle: res.data.data?.responseMessage,
        });
      }
    };

    const timeout = setTimeout(() => {
      quizInteraction();
    }, 1000);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAnswer, token, time]);
  if (success) {
    return (
      <Success
        url={data.url || ""}
        title={data.title || ""}
        subtitle={data.subtitle || ""}
      />
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>{"اختبار القدرات"}</div>
      <div className={styles.wrapper}>
        <span className={clsx("font-sora", styles.time)}>
          {time >= 0 ? time : 0}
        </span>
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