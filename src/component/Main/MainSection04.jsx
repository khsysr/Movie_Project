import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";

function MainSection04() {
  return (
    <div className="MainSection04_wrap">
      <div className="MainSection04_heading">
        <h1>자주 찾는 질문</h1>
      </div>
      <Accordion defaultActiveKey="0" className="Accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            고객센터 및 실시간 채팅 상담 이용하기{" "}
          </Accordion.Header>
          <Accordion.Body>
            넷플릭스는 장편 영화, 다큐멘터리, 시리즈, 애니메이션, 각종 상을
            수상한 넷플릭스 오리지널 등 수많은 콘텐츠를 확보하고 있습니다.
            마음에 드는 콘텐츠를 원하는 시간에 원하는 만큼 시청하실 수 있습니다.
            넷플릭스 콘텐츠를 한번 살펴보세요.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>[회원] 회원가입 방법이 궁금해요.</Accordion.Header>
          <Accordion.Body>
            넷플릭스는 각종 수상 경력에 빛나는 시리즈, 영화, 애니메이션,
            다큐멘터리 등 다양한 콘텐츠를 인터넷 연결이 가능한 수천 종의
            디바이스에서 시청할 수 있는 스트리밍 서비스입니다. 저렴한 월
            요금으로 원하는 시간에 원하는 만큼 즐길 수 있습니다. 무궁무진한
            콘텐츠가 준비되어 있으며 매주 새로운 시리즈와 영화가 제공됩니다.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>[로그인] 로그인 방법이 궁금해요.</Accordion.Header>
          <Accordion.Body>
            스마트폰, 태블릿, 스마트 TV, 노트북, 스트리밍 디바이스 등 다양한
            디바이스에서 월정액 요금 하나로 넷플릭스를 시청하세요. 멤버십 요금은
            월 5,500원부터 17,000원까지 다양합니다. 추가 비용이나 약정이
            없습니다.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            [로그인] 자동 로그아웃이 되었는데, 제 계정을 모르겠어요.
          </Accordion.Header>
          <Accordion.Body>
            언제 어디서나 시청할 수 있습니다. 넷플릭스 계정으로 로그인하면
            PC에서 netflix.com을 통해 바로 시청할 수 있으며, 인터넷이 연결되어
            있고 넷플릭스 앱을 지원하는 디바이스(스마트 TV, 스마트폰, 태블릿,
            스트리밍 미디어 플레이어, 게임 콘솔 등)에서도 언제든지 시청할 수
            있습니다. iOS, Android, Windows 10용 앱에서는 좋아하는 시리즈를
            저장할 수도 있습니다. 저장 기능을 이용해 이동 중이나 인터넷에 연결할
            수 없는 곳에서도 시청하세요. 넷플릭스는 어디서든 함께니까요.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            [로그인] 이용권이 있는 계정이 무엇인지 찾고 싶어요.
          </Accordion.Header>
          <Accordion.Body>
            넷플릭스는 부담 없이 간편합니다. 성가신 계약도, 약정도 없으니까요.
            멤버십 해지도 온라인에서 클릭 두 번이면 완료할 수 있습니다. 해지
            수수료도 없으니 원할 때 언제든 계정을 시작하거나 종료하세요.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            [로그인] 로그인이 안될 때 고객문의를 남길 수 있는 방법?
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            [결제] 방송 VOD를 개별구매 할 수 있나요?
          </Accordion.Header>
          <Accordion.Body>
            멤버십에 넷플릭스 키즈 환경이 포함되어 있어 자녀가 자기만의 공간에서
            가족용 시리즈와 영화를 즐기는 동안 부모가 이를 관리할 수 있습니다.
            키즈 프로필과 더불어 PIN 번호를 이용한 자녀 보호 기능도 있어, 자녀가
            시청할 수 있는 콘텐츠의 관람등급을 제한하고 자녀의 시청을 원치 않는
            특정 작품을 차단할 수도 있습니다.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>[인증] 성인인증은 어떻게 하나요?</Accordion.Header>
          <Accordion.Body>
            멤버십에 넷플릭스 키즈 환경이 포함되어 있어 자녀가 자기만의 공간에서
            가족용 시리즈와 영화를 즐기는 동안 부모가 이를 관리할 수 있습니다.
            키즈 프로필과 더불어 PIN 번호를 이용한 자녀 보호 기능도 있어, 자녀가
            시청할 수 있는 콘텐츠의 관람등급을 제한하고 자녀의 시청을 원치 않는
            특정 작품을 차단할 수도 있습니다.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>
            [결제] 애플/구글 인앱결제 후 이용관 확인이 안됩니다.
          </Accordion.Header>
          <Accordion.Body>
            멤버십에 넷플릭스 키즈 환경이 포함되어 있어 자녀가 자기만의 공간에서
            가족용 시리즈와 영화를 즐기는 동안 부모가 이를 관리할 수 있습니다.
            키즈 프로필과 더불어 PIN 번호를 이용한 자녀 보호 기능도 있어, 자녀가
            시청할 수 있는 콘텐츠의 관람등급을 제한하고 자녀의 시청을 원치 않는
            특정 작품을 차단할 수도 있습니다.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default MainSection04;
