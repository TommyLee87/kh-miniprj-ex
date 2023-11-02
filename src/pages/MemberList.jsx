import { useState, useEffect } from "react";
import AxiosApi from "../api/AxiosApi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 40px;
`;
const MemberInfoWrapper = styled.div`
  margin: 10px;
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  flex: 1;
  min-width: 240px;
  background-color: antiquewhite;
`;

const MemberId = styled.p`
  font-weight: bold;
`;

const MemberName = styled.p`
  font-style: italic;
`;

const MemberEmail = styled.p`
  color: #555;
`;

const MemberJoinDate = styled.p`
  font-size: 0.8rem;
  color: #777;
`;

const MemberList = () => {
  const navigate = useNavigate();
  const [memberList, setMemberList] = useState("");
  const isLogin = window.localStorage.getItem("isLogin");
  //로그인 되지 않은 상태로 홈 진입시 로그인 페이지로 강제이동
  if (isLogin !== "TRUE") navigate("/");

  useEffect(() => {
    const memberList = async () => {
      try {
        const resp = await AxiosApi.memberList("ALL"); // 전체 조회
        if (resp.status === 200) setMemberList(resp.data);
        console.log(resp.data);
      } catch (e) {
        console.log("네트워크 에러" + e);
      }
    };
    memberList();
  }, []);

  const onClickMember = (id) => {
    console.log("onClick Member ID : " + id);
  };
  return (
    <>
      <Container>
        {memberList &&
          memberList.map((member) => (
            <MemberInfoWrapper
              key={member.id}
              onClick={() => onClickMember(member.id)}
            >
              <MemberId>ID : {member.id}</MemberId>
              <MemberName>이름 : {member.name}</MemberName>
              <MemberEmail>이메일 : {member.email}</MemberEmail>
              <MemberJoinDate>가입일 : {member.join}</MemberJoinDate>
            </MemberInfoWrapper>
          ))}
      </Container>
    </>
  );
};

export default MemberList;
