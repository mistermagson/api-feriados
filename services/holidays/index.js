import NotFoundError from '@/errors/NotFoundError';

/**
 * Tabela da lua cheia de Páscoa, valida entre 1900 e 2199, inclusive.
 * Contendo mês (indexado em 0) e dia.
 */
function getPascalFullMoonDates() {
  return [
    [3, 14],
    [3, 3],
    [2, 23],
    [3, 11],
    [2, 31],
    [3, 18],
    [3, 8],
    [2, 28],
    [3, 16],
    [3, 5],
    [2, 25],
    [3, 13],
    [3, 2],
    [2, 22],
    [3, 10],
    [2, 30],
    [3, 17],
    [3, 7],
    [2, 27],
  ];
}

/**
 * @param Date date
 * @return string
 */
function formatDate(date) {
  return date.toISOString().substr(0, 10);
}


/**
 * Cálculo de feriados móveis baseados na Páscoa
 *
 * @see https://en.wikipedia.org/wiki/Computus
 */
export function getEasterHolidays(year) {
  if (year < 1900 || year > 2199) {
    throw new NotFoundError({
      name: 'NotFoundError',
      message: 'Ano fora do intervalo suportado entre 1900 e 2199.',
      type: 'feriados_range_error',
    });
  }

  const pascalFullMoonMonthDay = getPascalFullMoonDates();
  const [refMonth, refDay] = pascalFullMoonMonthDay[year % 19];
  const movingDate = new Date(year, refMonth, refDay);
  const holidays = [];
  movingDate.setDate(movingDate.getDate() + 7 - movingDate.getDay());
  holidays.push({
    date: formatDate(movingDate),
    name: 'Páscoa',
    type: 'nacional',
  });
  movingDate.setDate(movingDate.getDate() - 2);
  holidays.push({
    date: formatDate(movingDate),
    name: 'Sexta-feira Santa',
    type: 'nacional',
  });
  movingDate.setDate(movingDate.getDate() - 45);
  holidays.push({
    date: formatDate(movingDate),
    name: 'Carnaval',
    type: 'nacional',
  });
  movingDate.setDate(movingDate.getDate() + 107);
  holidays.push({
    date: formatDate(movingDate),
    name: 'Corpus Christi',
    type: 'nacional',
  });
  return holidays;
}

export function getFeriadosLegaisSemanaSanta(year) {
  if (year < 1900 || year > 2199) {
    throw new NotFoundError({
      name: 'NotFoundError',
      message: 'Ano fora do intervalo suportado entre 1900 e 2199.',
      type: 'feriados_range_error',
    });
  }

  const pascalFullMoonMonthDay = getPascalFullMoonDates();
  const [refMonth, refDay] = pascalFullMoonMonthDay[year % 19];
  const movingDate = new Date(year, refMonth, refDay);
  const holidays = [];
  //calcula a pascoa
  movingDate.setDate(movingDate.getDate() + 7 - movingDate.getDay());

  movingDate.setDate(movingDate.getDate() - 3);
  holidays.push({
    date: formatDate(movingDate),
    name: 'Feriado Legal - Quinta-feira Santa',
    type: 'legal',
  });
  movingDate.setDate(movingDate.getDate() - 1);
  holidays.push({
    date: formatDate(movingDate),
    name: 'Feriado Legal - Quarta-feira Santa',
    type: 'legal',
  });
  holidays.push( ['11-01', 'Finados'],
  )

  return holidays;
}
/**
 * Combina feriados móveis e fixos.
 *
 * Lei n° 6.802 de 30/06/1980
 * - Nossa Senhora Aparecida
 * Lei n° 662 de 06/04/1949
 * - Confraternização mundial
 * - Tiradentes
 * - Dia do trabalho
 * - Independência do Brasil
 * - Finados
 * - Proclamação da República
 * - Natal
 *
 * Referência de https://github.com/pagarme/business-calendar/tree/master/src/brazil
 */
export function getNationalHolidays(year) {
  const fixedHolidays = [
    ['01-01', 'Confraternização mundial'],
    ['04-21', 'Tiradentes'],
    ['05-01', 'Dia do trabalho'],
    ['09-07', 'Independência do Brasil'],
    ['10-12', 'Nossa Senhora Aparecida'],
    ['11-02', 'Finados'],
    ['11-15', 'Proclamação da República'],
    ['12-25', 'Natal'],
  ];
  return fixedHolidays.map(([date, name]) => ({
    date: `${year}-${date}`,
    name,
    type: 'nacional',
  }));
}

export function getRecesso(year) {
  const fixedHolidays = [
    ['01-01', 'Recesso do Judiciário'],
    ['01-02', 'Recesso do Judiciário'],
    ['01-03', 'Recesso do Judiciário'],
    ['01-04', 'Recesso do Judiciário'],
    ['01-05', 'Recesso do Judiciário'],
    ['01-06', 'Recesso do Judiciário'],
    ['12-20', 'Recesso do Judiciário'],
    ['12-21', 'Recesso do Judiciário'],
    ['12-22', 'Recesso do Judiciário'],
    ['12-23', 'Recesso do Judiciário'],
    ['12-24', 'Recesso do Judiciário'],
    ['12-25', 'Recesso do Judiciário'],
    ['12-26', 'Recesso do Judiciário'],
    ['12-27', 'Recesso do Judiciário'],
    ['12-28', 'Recesso do Judiciário'],
    ['12-29', 'Recesso do Judiciário'],
    ['12-30', 'Recesso do Judiciário'],
    ['12-31', 'Recesso do Judiciário'],

  ];
  return fixedHolidays.map(([date, name]) => ({
    date: `${year}-${date}`,
    name,
    type: 'recesso',
  }));
}

function sortByDate(holidays) {
  return holidays.sort((a, b) => {
    if (a.date > b.date) {
      return 1;
    }
    if (a.date < b.date) {
      return -1;
    }
    return 0;
  });
}

export default function getHolidays(year) {
  const easterHolidays = getEasterHolidays(year);
  const semanaSanta = getFeriadosLegaisSemanaSanta(year);
  const nationalHolidays = getNationalHolidays(year);
  return sortByDate([...easterHolidays, ...nationalHolidays, ...semanaSanta], );
}
