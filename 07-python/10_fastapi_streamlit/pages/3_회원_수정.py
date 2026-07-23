import streamlit as st
import requests

st.title("회원 수정")

# 수정할 회원 id를 입력 받아서 회원이 없을 시 해당 id의 회원이 없습니다
# 있을 시 st.session_state['member_to_edit'] = response.json() 결과값 저장
member_id = st.number_input("회원 ID", min_value=1)

if st.button("조회 레쓰고"):
    response = requests.get(f"http://localhost:8000/members/{member_id}")
    if response.status_code == 200:
        st.session_state['member_to_edit'] = response.json()
    else:
        st.error("해당 ID의 회원이 없습니다.")
    

# if member_to_edit in st.session_state: 사용해서
if "member_to_edit" in st.session_state:
    member = st.session_state['member_to_edit']

    with st.form("update_member_form"):
        name = st.text_input("이름", value=member['name'])
        address = st.text_input("주소", value=member['address'])
        email = st.text_input("이메일", value=member['email'])
        phone_number = st.text_input("전화번호", value=member['phone_number'])
        job = st.text_input("직업", value=member['job'])
        company = st.text_input("회사명", value=member['company'])

        if st.form_submit_button("수정하기"):
            requests.put(f"http://localhost:8000/members/{member_id}", json={
                "name": name,
                "address": address,
                "email": email,
                "phone_number": phone_number,
                "job": job,
                "company": company
            })
            st.success("수정되었습니다. 회원목록 페이지에서 확인해보세요.")
            del st.session_state['member_to_edit']
