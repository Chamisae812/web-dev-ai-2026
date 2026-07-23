import streamlit as st
import requests

"""
st.form() : 여러 입력창을 하나로 묶어서, "등록하기"버튼을 눌렸을 때 한 번에 처리
st.text_input() : 한 줄 텍스트 입력창
"""
st.markdown(
    """
    <h1 style='color:green'>회원등록<h1>
    """,
    unsafe_allow_html=True
)
with st.form("create_member_form"):
    name = st.text_input("이름")
    address = st.text_input("주소")
    email = st.text_input("이메일")
    phone_number = st.text_input("전화번호")
    job = st.text_input("직업")
    company = st.text_input("회사명")

    if st.form_submit_button("등록하기"):
        requests.post("http://localhost:8000/members", json={
            "name": name,
            "address": address,
            "email": email,
            "phone_number": phone_number,
            "job": job,
            "company": company
        })
        st.success("등록되었습니다. 회원목록 페이지에서 확인해보세요.")