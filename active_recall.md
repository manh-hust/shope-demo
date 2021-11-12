# useState
- Import "useState"
 [count, getCount] = useState(initValue)
+) getCount luôn có đối số truyền vào là count và return lại cái gì đó, có thể truyền vào 1 callback
+) initValue là giá trị khởi tạo cũng có thể được truyền vào là 1 function
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

====================
#  UseEffect
//+) useEffect(callback)
//+) useEffect(callback,[])
//+) useEffect(callback,[...])
//+) cleanup return lai 1 function xoa nhung thu lam leak memory
//+) Step 1: Cập nhật lại State
//+) Step 2: Cập nhật lại DOM 
//+) Step 3: Render lại UI 
//+) Step 4: Gọi cleanup nếu deps thay đổi 
//+) Step 5: Gọi useEffect callback


================================

# UseLayoutEffect

=====================
#  UseRef
//+) Lưu trữ giá trị cũ
//+) Lấy DOM element

// =============== memo: tránh render lại component không cần thiết
// =============== 
# UseCallback()
- Sử dụng phải kết hợp với meno ở Component con.
- Sử dụng khi truyền prop là 1 function cho hàm con, tránh tạo ra những hàm mới không cần thiết. 

# UseReducer
Step1. Init state
Step2. Actions: Có hàm tạo cho các action là 1 Object { state, payload}
Step3. Reducer: là 1 hàm nhận vào state và action, sử dụng switch(action.payload) để xử lí các phần riêng biệt sau đó trả về  state mới và render lại.
Step4. Dispatch: Làm nhiệm vụ gửi dữ liệu Dispatch(Actiontor(data)) từ Component lên hàm Reducer để xử lí

+)  const [state, dispatch] = useReducer(reducer, initialState)
+)  chức năng giống State, dùng để xử lí và bóc tách những tác vụ phức tạp

# UseContext
Step1: createContex: Tạo 1 thẻ bự để lưu trữ state được truyền qua value, các component con đều có thể lấy dữ liệu từ đây
+) <Context.Provider value={}></Context.Provider>
Step2: Component con muốn lấy data dùng cú pháp const ... = useContext(Context)

# Kết hợp UseReducer và UseContext để tạo ra 1 State Global cho phép truy cập và chỉnh sửa State mọi nơi



##### Redux
+) Có duy nhất 1 Store cho toàn bộ App là 1 object chứa các state cho mỗi công việc

+) Hàm tạo actions với cấu trúc giống Reducer, có thể có nhiều Reducer
- Mỗi Reducer thực hiện các thao tác trên 1 state duy nhất
- Có hàm Combine các Reducer nhỏ lại

+) 