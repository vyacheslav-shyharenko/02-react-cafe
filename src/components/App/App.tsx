import { useState } from 'react';
import type { Votes, VoteType } from '../../types/votes';
import CafeInfo from '../CafeInfo/CafeInfo';
import Notification from '../Notification/Notification';
import VoteOptions from '../VoteOptions/VoteOptions';
import VoteStats from '../VoteStats/VoteStats';
import css from './App.module.css';

const App = () => {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleVote = (params: VoteType): void => {
    setVotes((prev) => ({ ...prev, [params]: prev[params] + 1 }));
  };

  const resetVotes = () => {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  };

  const { good, neutral, bad } = votes;

  const totalVotes = good + neutral + bad;

  const positiveRate = totalVotes ? Math.round((votes.good / totalVotes) * 100) : 0;

  return (
    <>
      <div className={css.app}>
        <CafeInfo />

        <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={totalVotes > 0} />

        {totalVotes < 1 ? (
          <Notification />
        ) : (
          <VoteStats votes={votes} totalVotes={totalVotes} positiveRate={positiveRate} />
        )}
      </div>
    </>
  );
};

export default App;
