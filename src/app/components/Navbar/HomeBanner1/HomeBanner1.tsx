import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { AiOutlineEye } from 'react-icons/ai';
import './HomeBanner1.css';

const HomeBanner1 = () => {
  const [data, setData] = React.useState<any>(null);

  const getData = async () => {
    let temp = [
      {
        name: 'Calorie Intake',
        value: 2000,
        unit: 'kcal',
        goal: 2500,
        goalUnit: 'kcal'
      },
      {
        name: 'Sleep',
        value: 8,
        unit: 'hrs',
        goal: 8,
        goalUnit: 'hrs'
      },
      {
        name: 'Steps',
        value: 3000,
        unit: 'steps',
        goal: 10000,
        goalUnit: 'steps'
      },
      {
        name: 'Water',
        value: 2000,
        unit: 'ml',
        goal: 3000,
        goalUnit: 'ml'
      },
      {
        name: 'Weight',
        value: 75,
        unit: 'kg',
        goal: 70,
        goalUnit: 'ml'
      },
      {
        name: 'Workout',
        value: 2,
        unit: 'days',
        goal: 6,
        goalUnit: 'days'
      }
    ];
    setData(temp);
  };

  React.useEffect(() => {
    getData();
  }, []);

  function simplifyFraction(numerator: number, denominator: number): [number, number] {
    function gcd(a: number, b: number): number {
      return b === 0 ? a : gcd(b, a % b);
    }
    const commonDivisor: number = gcd(numerator, denominator);

    const simplifiedNumerator: number = numerator / commonDivisor;
    const simplifiedDenominator: number = denominator / commonDivisor;

    return [simplifiedNumerator, simplifiedDenominator];
  }

  return (
    <div className='meters'>
      {data?.length > 0 &&
        data.map((item: any, index: number) => {
          return (
            <div className='card' key={index}>
              <div className='card-header'>
                <div className='card-header-box'>
                  <div className='card-header-box-name'>{item.name}</div>
                  <div className='card-header-box-value'>
                    {item.value}
                    {item.unit}
                  </div>
                </div>
                <div className='card-header-box'>
                  <div className='card-header-box-name'>Target</div>
                  <div className='card-header-box-value'>
                    {item.goal}
                    {item.goalUnit}
                  </div>
                </div>
              </div>
              <div className='circular-progress-wrapper'>
                <CircularProgress
                  variant='determinate'
                  value={(item.value / item.goal) * 100}
                />
                <span className='textincircle'>
                  {simplifyFraction(item.value, item.goal)[0] +
                    '/' +
                    simplifyFraction(item.value, item.goal)[1]}
                </span>
              </div>
              <button>
                Show Report
                <AiOutlineEye />
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default HomeBanner1;
