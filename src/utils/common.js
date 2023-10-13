/**
 * 작성자명 : 원종석
 * 작성일자 : 2023-08-28 (월)
 * 작성내용 : Date 객체를 전달 받아 특정 형태의 날짜 string으로 변환 후 반환한다.
 * @param {Date} date 날짜
 * @returns "YYYY-MM-DD" 형태의 string 데이터
 */
export const formatDateToString = (date) => {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1을 하고 2자리로 포맷
  const day = String(date.getUTCDate()).padStart(2, '0'); // 일자를 2자리로 포맷

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};

/**
 * 작성자명 : 원종석
 * 작성일자 : 2023-08-28 (월)
 * 작성내용 : 기준 날짜와 현재 날짜의 시간 차이를 구하여 일자로 반환한다.
 * @param {Date} date 날짜
 * @returns number 형태의 시간 차이 값
 */
export const setKoreaDay = (date) => {
  const createdDate = new Date(date);
  const currentDate = new Date();

  const timeDiff = currentDate.getTime() - createdDate.getTime();
  const day = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));

  return day;
};
