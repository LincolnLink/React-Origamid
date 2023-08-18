import './App.css';
import { TesteHook } from './TesteHook/TesteHook';
import { TesteHook2 } from './TesteHook/TesteHook2';
import { TesteHook3 } from './TesteCDallBackHook/TesteHook3';

import { IndexUseEffect } from './TesteUseEffect/IndexUseEffect';
import { ComponentUseEffect } from './TesteUseEffect/componentUseEffect';
import { DesmontarUseEffect } from './DesmontarUseEffect/index';

import { UseRefComponent1 } from './UseRef/index';

import { UseRefComponent2 } from './UseRef2/index';

import { UseRefComponent3 } from './UseRef3/index';

//import { UseMemoTeste } from './useMemo/index';

import { UseCallback } from './useCallback/index';

//import { Usecallbacktestepai } from './useCallbackTeste/index';

import { UseContext } from './useContext/index';

export const App = () => {
  return (
    <>
      <h1>Teste1</h1>
      <br />
      <TesteHook />
      <h1>Teste2 - Teste da modal</h1>
      <br />
      <TesteHook2 />
      <h1>Teste3 = Teste da modal com callback</h1>
      <br />
      <TesteHook3 />
      <h1>useEffect Teste</h1>
      <br />
      <IndexUseEffect />
      <h1>useEffect Component</h1>
      <br />
      <ComponentUseEffect />
      <h1>useEffect Antes de desmontar</h1>
      <br />
      <DesmontarUseEffect />
      <h1>useRef</h1>
      <br />
      <br />
      <UseRefComponent1 />
      <br />
      <br />
      <UseRefComponent2 />
      <br />
      <br />
      <UseRefComponent3 />

      <br />
      <br />
      {/* <UseMemoTeste /> */}
      <br />
      <br />
      <UseCallback />
      <br />
      <br />
      {/* <Usecallbacktestepai /> */}
      <br />
      <br />
      <UseContext />
      <br />
      <br />
    </>
  );
};
