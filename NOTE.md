### 초기 세팅

- npx create-next-app@lestest 명령어로 시작하는데 이게 뭘하는 명령어냐

먼저

- Node.js : 원래 자바스크립트는 브라우저 안에서만 돌아갔는데, 브라우저 밖(내 컴퓨터, 서버)에서도 돌리게 해주는 실행 환경이다. 이게 있어야 npm, npx도 쓸수있다.

- npm : Node.js와 같이 오는 '패키지 관리자'이다. 남이 만든 코드(라이브러리)를 내려받아 설치해주는 앱스텅같은 것. `npm install zustand` 이런식으로 zustand라는 상태관리 라이브러리를 프로젝트에 설치할수있다.

- npx : npm 패키지를 설치하지 않고 한 번만 실행해주는 도구다. npm은 설치해서 갖고있는거면 npx는 빌려서 한번쓰고 반납하는것.

- React : 화면을 컴포넌트단위로 만드는 자바스크립트 라이브러리다. 버튼, 카드, 헤더 같은걸 조각으로 만들어 조립한다.

- Next.js : React 위에 올라가는 프레임워크다. React만으로는 페이지이동(라우팅), 서버에서 데이터 가져오기, 배포 설정을 직접 다자야하는데, Next.js가 이걸 미리 갖춰준다. 이 프로젝트의 app/폴더구조, Server Action, RSC가 다 Next.js의 기능이다.

- create-next-app : Next.js 프로젝트의 기본 뼈대를 자동으로 만들어주는 도구다. 이게 없으면 폴더구조, 설정파일, 필요한 패키지를 전부 손으로 만들어야함.

- `npx create-next-app@latest .` : npx로 최신버전의 Next.;js 뼈대 생성 도구를 실행해서, 현재폴더에 만들어라.

- `npm i` : npm install의 줄임말이다. 라이브러리를 설치할수있음

- `npm i sass react-icons clsx tailwind-merge` :
    - sass : css를 더 편하게 쓰게해주는 도구다. .scss파일에서 변수, 중첩, 조각 재사용을 쓸 수 있다. tailwind를 주로 쓰면 꼭 필요하진않음.

    - react-icons : 아이콘을 컴포넌트로 불러서 쓸수있는 모음집이다.

    - clsx : 조건에 따라 css클래스 이름을 붙였다 뗐다 하는 작은 도구다. 예: clsx('btn', isActive && 'bg-green-500')은 isActive가 참일때만 bg-green-500이 붙는다. 이게 없으면 문자열을 + 로 이어붙이거나 삼항 연산자를 길게써야해서 지저분해진다.

    - tailwind-merge : Tailwind클래스끼리 겹칠때 충돌을 정리해주는 도구다. 예: p-2와 p-4가 같이 들어가면 뒤쪽p-4가 남는다.

    - clsx와 tailwind-merge는 보통 같이 묶어서 cn()이라는 헬퍼 함수로 만들어사용한다. 컴포넌트에 claaName을 외부에서 받을때 유용하다.

- `npx shadcn@latest init` : shadcn/ui를 초기화 ?

    - shadcn/ui : 버튼, 입력창, 모달, 드롭다운 같은 UI 컴포넌트를 미리 예쁘게 만들어둔모음집이다.

    - 보통 라이브러리는 npm install로 설치하면 node_modules 안에 숨어있어서 고치기 어려운데 shadcn은 컴포넌트 코드를 내 프로젝트 폴더에 직접 복사해준다. 그래서 마음대로 수정이가능함. 스타일은 tailwind로 되어있어서, clsx, tailwind-merge도 shadcn컴포넌트 안에서 쓴다.

    - init가 초기화인 이유 : 여기서 초기화는 지우고 처음으로 되돌린다는 뜻이아니라 shadcn을 쓸 수 있도록 처음 세팅한다는 뜻으로 기존파일은 지우지않고 필요한걸 추가하거나 일부를 수정한다.

    - init가 하는 일 : 컴포넌트를 어디에둘지, 어떤 스타일을 쓸지 같은 설정을 지정하는 파일 components.json을 생성하고, cn()함수가 들어가는 src/lib/utils.ts도 생성하며, 전역 css(global.css)에 색상 변수도 추가한다.

    - 지금의 components.json의 설정은 '앞으로 실행하는 모든 shadcn add컴포넌트가 자동으로 shared/components/ui/폴더 로 생성된다.', '컴포넌트 내부에서 클래스 병합 유틸리티를 호출할때 `@/shared/utils/cn` 을 자동으로 import한다.' 고 되어있다.

- `mkdir -p shared/utils/` : -p는 parents(상위폴더)의 줄임말로 상위폴더가 없으면 같이 만들어주고, 이미 있어도 에러를 내지않는다. 그래서 저런 중첩구조폴더를 한번에 만들어줌.

    - 이 폴더 안에 cn.ts파일을 만듬 : cn()이라는 함수 하나를 만들어 두는 파일이다. clsx+tailwind-merge

    - cn.ts : 동작 순서 : clsx(inputs) 이 조건에 따라 클래스 이름을 모아 하나의 문자열로 만든다. false나 undefined는 빼고, twMerge(...)가 그 문자열에서 Tailwind클래스끼리 충돌하면 뒤에 오는걸 남긴다.

    - 가이드에서 cn.ts가 src/바깥이아닌 src안인데 확인할것.

        - 디렉터리 구조를 그래서 다시 변경을하니깐 다른 .json파일들의 경로가 깨져서 나중에 import가 경로가 잘못지정되게되었다.

        - 고쳐야할파일 : tsconfig.json(ts한테 이 프로젝트를 어떤 규칙으로 해석하고 검사할지를 알려주는 설정파일이다) - , components.json - shadcn add가 전역 css파일을 찾는 경로, 등 더 파일들 경로를 일일히 고쳐야해서 나머지는 클로드한테 맡겼다. 너무 지침 , 그래서 내가 왜 src루트를 놓쳐냐 하니 create-next-app을 시작할때 추천기본값으로 할까요?라는 질문을하는데 여기서 기본값을 고르면 src/폴더질문없이 넘어가서 src/없이 app/을 루트에 만든다. 그때 내가 그냥 기본설정으로 한것같다.

- `npx shadcn add button input badge card dialog dropdown-menu` : shadcn컴포넌트들을 한번에 추가하는건데 init으로 컴포넌트를 놓을 자리와 규칙을 정했다면, add는 컴포넌트를 실제로 들여놓는 단계다. (버튼, 입력창, 작은라벨, 카드/상품 박스, 모달 팝업창 펼쳐지는메뉴)
    - 실행하면 components.json을 읽고 어디에만들지 (@/components/ui로 지정해놓음) 확인후 각컴포넌트를 하나의 파일로 복사해 넣는다.(src/components/ui/button.tsx), 그 컴포넌트가 의존하는 라이브러리를 npm install로 자동설치까지 해놓음(@base-ui/react 등)
        - 이게 먼말이냐 : shadcn은 컴포넌트를 내. 로. 제그에 파일로 복사해 주는 도구다. npx shadcn add button을 하면 button.tsx가 src/components/ui/에 생기고, 그 뒤로는 shadcn이 할일이끝난다. 그래서 버튼을 쓸때는 shadcn이아닌 내 프로젝트 안의 그 파일에서 import { Button } from '@/components/ui/button'으로 가져온다. 내 파일이라서 색이나 모양을 마음대로 고칠수있다. 버튼이 눌리고 모달이 열리고 닫히는 동작은 Base UI라는 라이브러리가 담당하고 이건 node_modules에 설치되어있고, 내 버튼 파일이 안에서 불러다쓴다. 정리하면 모양은 내파일, 동작은 Base UI다. 그럼 저 컴포넌트들의 기본설정이 어떻게 되있냐

            - 그건 좀 있다 해보겠음

- 샤딩 로컬 파일 시스템 재비 uploades/및 .gitignore설정

    - 샤딩 : 큰 걸 여러칸으로 나눠서 나눠담는 방법 ( 파일이 많지않을때는 필요없긴하다. )

    - 필요하다면 mkdir uploads 하고 그파일은 이그노어에 추가해야함하 (왜냐 여긴 코드가아닌 사용자가 사이트에 올린 사진이다. 깃은 코드를 관리하는곳이기때문에 이런 데이터는 올리지 않음. 또, 용량도 커진다.)

- `npm i -D prettier prettier-plugin-tailwindcss` :
    - prettier : 코드를 자동으로 예쁘게 정리해주는 도구다. 코드가 돌아가는 방식을 바꾸는게아닌 띄어쓰기, 줄바굼, 따옴표등을 통일해준다.
    - ESLint와 차이 : ESLint(eslint.config.mjs)는 코드의 실수와 나쁜 습관을 잡는다.(안쓰는변수, 잘못된 문법 등) , prettier는 모양만 정리, 이렇게 역할이달라서 보통 같이 쓴다. 여기선 안쓰긴함. 써볼까 .
    - ESLint : create-next-app을할때 같이 설치해, 확장설치만하면 바로 사용가능하다. 코드 써보면서 바로바로 잘못된거에뜬다고함.

    - 근데 터미널 설치와 확장설치를 둘다 따로 해줘야한다.
        - npm -D prettier .. : 실제로 포맷을 해주는 엔진과 tailwind 플러그인이다. 프로젝트의 node_modules에 들어가고, 터미널이나 Cl에서 쓰인다.
        - VS Code확장 : 에디터와 프리티어를 연결해주는 다리다. 이게 있어야 저장할때 자동으로 포맷된다.

- prettierignore : 정리하지 않을 파일 목록

- .vscode/settings.json : vscode의 설정을 파일로 적어둔것. 설정화면에서 체크박스를 누르는 것과 같은 일을 글로 적은것이다. 코드에 들어가 내용은
    - 코드를 정리하는 도구로 prettier를 쓰라되어있고, 저장할때 자동으로 정리하라, 저장할때 eslint가 자동으로 고칠수있는 문제를 고쳐주라는내용이 담겨있다.

- `npm i -D tsx` : tsx라는 npm 패키지를 설치하는것 (.tsx 파일 확장자와는 별개다.)
    - tsx 패키지 : .ts, .tsx파일을 컴파일없이 바로 실행해주는 도구다. npx tsx scripts.ts처럼 쓰면 Node로 바로 돌린다.
    - D : --save-dev의 줄임말로 devDependencies에 들어감. 개발할때만 쓰는 도구라서 배포용 의존성과 분리하는 것.

- package.json : 프로젝트정보, scripts(명령어 별명 모음), 앱이 실행될때 필요한 패키지 목록(next, react 등), 개발할때만 쓰는 도구 목록(prettier, tsx, eslint 같은거) 이렇게 프로젝트의 신분증이나 설정파일이다.
    - npm i 로 설치한 패키지는 node_modules 폴더에 내려받아지고 이름과 버전이 package.json에 자동으로 기록된다.
    - 왜 필요한가 : node_modules는 용량이커서 깃에 올리지않고 package.json만 올림. 다른 사람이 프로젝트를 받으면 npm install 한번으로 목록대로 전부 설치된다.

- shared/utils/formatPrice.ts : 숫자를 가격 문자열로 바꿔주는 함수이다.
