import streamlit as st
import requests

st.title("회원 삭제")

member_id = st.number_input("회원 ID", min_value=1)

if st.button("조회 레쓰고"):
    response = requests.get(f"http://localhost:8000/members/{member_id}")
    if response.status_code == 200:
        st.session_state['member_to_delete'] = response.json()
    else:
        st.error("해당 ID의 회원이 없습니다.")

if "member_to_delete" in st.session_state:
    member = st.session_state["member_to_delete"]
    st.dataframe(member)

    if st.button("잘가랑~"):
        response = requests.delete(f"http://localhost:8000/members/{member_id}")
        st.success("삭제되었습니다. 회원목록 페이지에서 확인해보세요.")
        del st.session_state['member_to_delete']

