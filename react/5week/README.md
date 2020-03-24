Третье задание домашней работы по 5 уроку
https://codesandbox.io/s/goofy-mestorf-tydg4
1) в файле utils.js исключены повторения, которые тормозили приложение
2) в файле App.js исключены строки  someSlowCalculation("NBAHAHAHA");
                                    someSlowCalculation("NBA");
3) React.useEffect(() => {
    someSlowCalculation("NBA");
  }, [onLike]);  можно полностью убрать,т.к.видимых эффектов не вызывается
 