import type { PlayerRef } from '@remotion/player';
import { useCallback } from 'react';
import { proxy, useSnapshot } from 'valtio';

type Player = {
  player: PlayerRef | null;
  playerSize: { height: number; width: number };
};

const playerState = proxy<Player>({
  player: null,
  playerSize: { height: 0, width: 0 },
});

export const usePlayer = () => {
  const { player, playerSize } = useSnapshot(playerState);

  const setPlayer = useCallback((player: PlayerRef) => {
    playerState.player = player;
  }, []);

  const setPlayerSize = useCallback((width: number, height: number) => {
    playerState.playerSize = { height, width };
  }, []);

  return { player, playerSize, setPlayer, setPlayerSize };
};
