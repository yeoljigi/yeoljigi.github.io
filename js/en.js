// 영어 — 화면 코드의 한국어 문장(열쇠) → 영어. js/i18n.js 가 읽는다.
//
// 한국어 문장을 고치면 열쇠도 같이 바뀌니 여기도 고친다(시험 tests/i18n.test.mjs 가 빠진 것을 잡는다).
// 「안전」 규칙은 영어에도 — 먹일 양 · 다음 먹일 시각을 정해 주는 말(recommend · you can give · safe to give · next dose at …)을 쓰지 않는다.
// 제품 이름은 포장의 한국어를 옮겨 적은 것(공식 영어 이름이 아니다) — 고를 때는 한국어 이름을 곁에 보인다.

export const EN = {
  // ── 뼈대 · 홈 ──
  '화면 고르기': 'Screens',
  '화면': 'Display',
  '아이 고르기': 'Choose a child',
  '아이': 'Child',
  '카카오톡 안에서 열었어요': 'Opened inside KakaoTalk',
  '기록이 사라지지 않게 기본 브라우저로 열어 홈 화면에 추가하세요.': 'Open it in your default browser and add it to your home screen so your records are kept.',
  '열기': 'Open',
  '기록을 저장하지 못하고 있어요': 'Records are not being saved',
  '사생활 보호(시크릿) 창이거나 저장 공간이 꽉 찼어요. 창을 닫으면 기록이 사라집니다.':
    'This is a private window or storage is full. Records will be lost when you close it.',
  '홈 화면에 추가': 'Add to home screen',
  '앱처럼 바로 열고, 기록도 오래 남아요.': 'Opens like an app, and records last longer.',
  '추가': 'Add',
  '홈 화면에 추가하세요': 'Add to your home screen',
  'Safari 아래 공유 버튼 → 「홈 화면에 추가」. 그래야 기록이 오래 남고 알림도 받을 수 있어요.':
    'In Safari, tap Share → “Add to Home Screen”. Records last longer and reminders can work.',
  '119 전화': 'Call 119',
  '{ago} {temp}℃보다 {diff}': '{diff} from {temp}℃ {ago}',
  '그대로': 'no change',
  '24시간 최고 {temp}℃': '24h high {temp}℃',
  '이번 열은 {date} {time}부터 — <b>{h}시간째</b>': 'This fever began {date} {time} — <b>{h}h so far</b>',
  '병원에 가야 할 때': 'When to see a doctor',
  '열, 겁내지 않아도 돼요': 'Fever is not the enemy',
  '아직 체온 기록이 없어요': 'No temperature yet',
  '아래 「체온」을 눌러 처음 잰 체온을 남겨 주세요.': 'Tap “Temp” below to log the first reading.',
  '{t} 전': '{t} ago',
  '기록 없음': 'No record',
  '마지막 {at} · {med} {amount}': 'Last {at} · {med} {amount}',
  '먹인 약을 기록하면 여기 보여요': 'Medicines you log show up here',
  '24시간 {n}번 기록': '{n|dose|doses} logged in 24h',
  '간격 안내 {h}시간 이상 · 하루 {n}번까지': 'Label: {h}h+ apart · up to {n} a day',
  '지금 체온': 'Current temperature',
  '{name} 지금': '{name} now',
  '체온': 'Temp',
  '해열제': 'Medicine',
  '증상': 'Symptoms',
  '소변': 'Pee',
  '물': 'Water',
  '해열제 기록': 'Fever medicine log',
  '간격 안내': 'About intervals',
  '다음 약은 포장 설명서의 간격 · 양을 확인하고 먹여 주세요.': 'Before the next dose, check the interval and amount on the package.',
  '최근 24시간 그래프': 'Last 24 hours chart',
  '최근 24시간': 'Last 24 hours',
  '전체 기록': 'All records',
  '최근 기록': 'Recent',
  '이 앱은 기록을 돕는 도구예요. 약은 포장 설명서와 의사 · 약사의 지시를 먼저 따르세요.':
    'This app helps you keep records. For medicines, follow the package leaflet and your doctor or pharmacist first.',
  '열지기': 'Yeoljigi',
  '진료용 요약 보내기': 'Send summary for the doctor',
  '아이 열, 같이 지켜요': 'Watch a fever together',
  '체온 · 해열제 · 증상을 한 번에 남기고<br>언제 무엇을 먹였는지 가족과 함께 봐요.':
    'Log temperature, fever medicine and symptoms,<br>and share with family what was given when.',
  '아이 더하기': 'Add a child',
  '기록은 이 휴대폰에만 저장돼요. 가입하지 않아도 됩니다.': 'Records stay on this phone only. No sign-up needed.',
  '메모': 'Note',

  // ── 기록 ──
  '체온 그래프': 'Temperature chart',
  '기간': 'Period',
  '{h}시간': '{h}h',
  '{n}일': '{n|day|days}',
  '아직 기록이 없어요.': 'No records yet.',
  '체온 기록하기': 'Log a temperature',
  '{name} 기록': '{name} · Log',

  // ── 약 안내 ──
  '{a}~{b}세': 'Age {a}–{b}',
  '설정 → 내 약에서 약을 더해 주세요.': 'Add a medicine in Settings → My medicines.',
  '1mL에 {mg}mg': '{mg}mg per 1mL',
  '(5mL에 {mg}mg)': '({mg}mg per 5mL)',
  '1개에 {mg}mg': '{mg}mg per piece',
  '{med}은(는) 종합감기약이에요. 양은 <b>포장의 나이별 표</b>대로 먹이세요. 해열제로 기록해 두면 든 {ing}을 홈의 해열제 기록에 함께 보여요.':
    '{med} is a combination cold medicine. Give it as the <b>age table on the package</b> says. Log it as a fever medicine and its {ing} shows in the fever medicine log on Home.',
  '함량': 'Strength',
  '이 약 {a}~{b}mL': 'This medicine: {a}–{b}mL',
  '나이': 'Age',
  '1회': 'Per dose',
  '하루 최대': 'Daily max',
  '표에 없는 나이(돌 전 등)는 의사 · 약사와 상의하세요.': 'For ages not in the table (such as under 1), ask a doctor or pharmacist.',
  '몸무게': 'Weight',
  '{a}~{b}개월': '{a}–{b} months',
  '{kg}kg 이상': '{kg}kg or more',
  '이 약 {a}mL': 'This medicine: {a}mL',
  '포장 설명서의 나이 · 몸무게별 표예요. 설명서는 몸무게를 알면 몸무게 쪽을 보라고 적고 있어요. 표에 없는 나이 · 몸무게는 의사 · 약사와 상의하세요.':
    'This is the age and weight table from the package leaflet. The leaflet says to go by weight when you know it. For ages or weights not in the table, ask a doctor or pharmacist.',
  '간격': 'Interval',
  '하루': 'Per day',
  '이 약은 하루 {n}번까지(내 약 설정)': 'this medicine up to {n} a day (My medicines)',
  '먹이는 나이': 'Age',
  '보통 생후 {m}개월부터': 'Usually from {m} months',
  '포장 설명서 내용': 'What the package says',
  '약': 'Medicine',
  '국내 허가 사항의 일반적인 내용이에요. 아이에게 먹일 양은 <b>손에 든 약의 포장 설명서</b>(나이 · 체중별 표)와 의사 · 약사의 지시를 따르세요. 이 앱은 양을 계산하지 않아요.':
    'This is the general content of the Korean product approval. For how much to give, follow <b>the leaflet of the medicine in your hand</b> (age and weight table) and your doctor or pharmacist. This app does not calculate amounts.',
  '주의': 'Cautions',
  '꼭 확인하세요': 'Please check',
  '약 안내': 'Medicines',

  // ── 설정 ──
  '몸무게 없음': 'No weight',
  '내 약': 'My medicines',
  '약 더하기': 'Add a medicine',
  '알림': 'Reminders',
  '해열제 1시간 뒤 체온 다시 재기': 'Re-check temperature 1 hour after medicine',
  '이 브라우저는 알림을 지원하지 않아요. 홈 화면에 추가하면 될 수 있어요.': 'This browser does not support notifications. Adding to the home screen may help.',
  '알림이 막혀 있어요. 브라우저 · 휴대폰 설정에서 허용해 주세요.': 'Notifications are blocked. Allow them in your browser or phone settings.',
  '앱이 열려 있거나 뒤에 남아 있을 때 울려요. 완전히 닫으면 울리지 않아요.':
    'Works while the app is open or in the background. Not when it is fully closed.',
  '알림 켜기': 'Turn on reminders',
  '언어': 'Language',
  '테마': 'Theme',
  '글자 크기': 'Text size',
  '가족과 나누기': 'Share with family',
  '기록 링크 보내기': 'Send a records link',
  '가족 휴대폰의 열지기에 최근 기록을 합쳐요': 'Merges recent records into Yeoljigi on a family phone',
  '받은 기록 링크 붙여 넣기': 'Paste a records link',
  '홈 화면 앱(아이폰)에서 링크가 브라우저로 열릴 때': 'When a link opens in the browser instead of the home-screen app (iPhone)',
  '기록 보관': 'Backup',
  '백업 파일 저장': 'Save a backup file',
  '휴대폰을 바꾸거나 다른 브라우저로 옮길 때': 'When you change phones or browsers',
  '백업 파일 불러오기': 'Load a backup file',
  '지금 기록에 합치거나, 파일의 것으로 바꿔요': 'Merge into your records, or replace them with the file',
  '모든 기록 지우기': 'Delete all records',
  '도움말': 'Help',
  '바로 병원에 가야 할 때': 'When to go to hospital now',
  '해열제 간격 · 교차 복용': 'Medicine intervals · alternating',
  '이 앱에 대해': 'About this app',
  '판 {v}': 'Version {v}',
  '만든 사람 응원하기': 'Support the maker',
  '무료 · 광고 없이 이어 가게 — GitHub Sponsors': 'Keep it free and ad-free — GitHub Sponsors',
  '설정': 'Settings',
  '홈': 'Home',
  '기록': 'Log',
  '자동': 'Auto',
  '밝게': 'Light',
  '어둡게': 'Dark',
  '보통': 'Normal',
  '크게': 'Large',
  '아주 크게': 'Extra large',

  // ── 진료용 요약 ──
  '진료용 요약': 'Summary for the doctor',
  '최근 72시간 기록이에요. 병원에서 보여 주거나 가족에게 보내세요.': 'Records from the last 72 hours. Show it at the clinic or send it to family.',
  '요약 글의 말': 'Summary language',
  '한국 병원에서는 한국어로 보여 주세요.': 'Show the Korean version at a Korean clinic.',
  '요약': 'Summary',
  '가족 휴대폰과 기록 합치기 — 기록 링크 보내기': 'Merge records with a family phone — send a records link',
  '복사': 'Copy',
  '그래프': 'Chart',
  '보내기': 'Send',
  '{name} 체온 · 해열제': '{name} · temperature and medicine',
  '열지기-{name}-{m}월{d}일.png': 'yeoljigi-{name}-{m}-{d}.png',
  '그림을 만들지 못했어요.': 'Could not make the image.',
  '복사했어요.': 'Copied.',
  '글을 길게 눌러 복사하세요.': 'Press and hold the text to copy it.',
  '화면을 그리지 못했어요': 'Could not draw this screen',
  '저장된 기록 가운데 읽을 수 없는 것이 있어요. 먼저 백업 파일을 저장해 두고, 다른 화면으로 가 보거나 모든 기록을 지우고 다시 시작하세요.':
    'Some saved records cannot be read. Save a backup file first, then try another screen or delete all records and start again.',

  // ── 누르기 · 알림 말 ──
  '소변 기록했어요.': 'Pee logged.',
  '되돌리기': 'Undo',
  '물 마신 것을 기록했어요.': 'Drink logged.',
  '설정 → 내 약에서 약을 먼저 더해 주세요.': 'First add a medicine in Settings → My medicines.',
  '모두 지우기': 'Delete all',
  '아이 · 기록 · 내 약이 모두 지워지고 되돌릴 수 없어요. 먼저 백업 파일을 저장해 두세요.':
    'All children, records and medicines will be deleted and cannot be restored. Save a backup file first.',
  '모두 지웠어요.': 'Everything was deleted.',
  '알림이 허용되지 않았어요.': 'Notifications were not allowed.',
  '알림을 켰어요.': 'Reminders on.',
  '백업 불러오기': 'Load backup',
  '「{file}」의 기록을 어떻게 할까요? 합치면 지금 기록은 그대로 두고 없던 기록만 더해요. 바꾸면 지금 기록은 사라져요.':
    'What should happen with “{file}”? Merge keeps your records and adds only the new ones. Replace removes your current records.',
  '바꾸기': 'Replace',
  '합치기': 'Merge',
  '아이 {kids}명 · 기록 {n}건을 불러왔어요.': 'Loaded {kids|child|children} · {n|record|records}.',
  '열지기 백업 파일이 아니거나 깨졌어요.': 'Not a Yeoljigi backup file, or it is damaged.',
  '기록 {n}건을 더했어요': 'Added {n|record|records}',
  '아이 {n}명': '{n|child|children}',
  '고친 기록 {n}건': '{n|edited record|edited records}',
  '지운 기록 {n}건 뺌': 'removed {n|deleted record|deleted records}',
  '새로 더할 기록이 없어요. 이미 같아요.': 'Nothing new to add. Already the same.',

  // ── 기록 링크 ──
  '<b>{name}</b>의 최근 3일 기록(체온 · 해열제 · 증상)을 링크에 담아요. 가족이 링크를 열고 「합치기」를 누르면 그 휴대폰의 열지기에 더해져요 — 그쪽 기록은 지우지 않아요.':
    'Puts <b>{name}</b>’s last 3 days (temperature, medicine, symptoms) into a link. When family open it and tap “Merge”, the records are added to Yeoljigi on their phone — nothing there is deleted.',
  '서로 한 번씩 보내면 두 휴대폰의 기록이 같아져요.': 'Send one each way and both phones will match.',
  '링크는 서버를 거치지 않지만, 보낸 대화방에는 남아요. <b>가족에게만</b> 보내세요.':
    'The link does not go through a server, but it stays in the chat you send it to. Send it <b>to family only</b>.',
  '약을 먹였다면 기록하고 바로 보내 주세요 — 다른 보호자가 또 먹이지 않게.': 'If you gave medicine, log it and send right away — so no one gives it again.',
  '링크 보내기': 'Send link',
  '열지기 기록 {span}치예요. 열고 「합치기」를 눌러 주세요.': 'Yeoljigi records from the last {span}. Open the link and tap “Merge”.',
  '카카오톡 등에서 받은 글을 통째로 복사해 붙여 넣으세요. 아이폰의 홈 화면 앱은 브라우저와 기록이 따로라, 링크를 누르면 브라우저 쪽에 합쳐져요.':
    'Copy the whole message you received (KakaoTalk etc.) and paste it here. On iPhone the home-screen app keeps records apart from the browser, so tapping the link merges into the browser instead.',
  '받은 글': 'Received message',
  '읽기': 'Read',
  '기록 링크를 찾지 못했어요. 글을 통째로 붙여 넣어 주세요.': 'No records link found. Paste the whole message.',
  '기록 링크를 읽지 못했어요. 링크가 잘렸을 수 있어요.': 'Could not read the records link. It may be cut off.',
  '{day} {time}에 보낸 ': 'Sent {day} {time}. ',
  '홈 화면의 열지기에 합치려면 이 글을 닫고, 링크를 복사해 열지기 → 설정 → 「받은 기록 링크 붙여 넣기」로 넣으세요.':
    'To merge into the home-screen Yeoljigi, close this, copy the link, and use Yeoljigi → Settings → “Paste a records link”.',
  '가족이 보낸 기록': 'Records from family',
  '{sent}{name}의 기록이에요 — 체온 {temp} · 해열제 {med} · 증상 {sym}건. 이 휴대폰 기록에 더해요. 지금 기록은 지우지 않아요.':
    '{sent}Records for {name}: temperature {temp} · medicine {med} · symptoms {sym}. They will be added to this phone. Nothing here is deleted.',
  '기록을 합치지 못했어요.': 'Could not merge the records.',
  '열지기-백업-{date}.json': 'yeoljigi-backup-{date}.json',
  '백업 파일을 저장했어요.': 'Backup file saved.',

  // ── 기록 창 ──
  '언제': 'When',
  '빠른 시간': 'Quick times',
  '지금': 'Now',
  '{n}분 전': '{n} min ago',
  '날짜와 시간': 'Date and time',
  '시각을 확인해 주세요.': 'Please check the time.',
  '아직 오지 않은 시각이에요. 시각을 확인해 주세요.': 'That time is in the future. Please check the time.',
  '이 기록 지우기': 'Delete this record',
  '기록을 지웠어요.': 'Record deleted.',
  '체온 고치기': 'Edit temperature',
  '{name} 체온': '{name} · temperature',
  '체온(℃) — 눌러서 바로 칠 수 있어요': 'Temperature (℃) — tap to type',
  '0.1도 내리기': 'Down 0.1 degree',
  '0.1도 올리기': 'Up 0.1 degree',
  '잰 곳': 'Where measured',
  '아이 상태 (선택)': 'How is your child? (optional)',
  '아이 상태': 'How is your child',
  '숫자보다 아이가 어떤지가 더 중요해요. 해열제는 아이가 힘들어할 때 먹여요.': 'How your child is doing matters more than the number. Fever medicine is for when they are uncomfortable.',
  '메모 (선택)': 'Note (optional)',
  '예: 자다 깨서 잼': 'e.g. woke up, measured',
  '저장': 'Save',
  '생후 4주 미만은 겨드랑이에 전자체온계로 재세요.': 'Under 4 weeks old, use an electronic thermometer in the armpit.',
  '이마는 귀 · 겨드랑이보다 덜 정확할 수 있어요. 열이 의심되면 귀나 겨드랑이로 다시 재 보세요.':
    'Forehead readings can be less accurate than ear or armpit. If you suspect a fever, check again at the ear or armpit.',
  '다섯 살 아래는 보통 귀나 겨드랑이로 재요.': 'Under age 5, the ear or armpit is usual.',
  '체온을 34~42℃ 사이로 넣어 주세요.': 'Enter a temperature between 34 and 42℃.',
  '{temp}℃ 기록했어요.': '{temp}℃ logged.',
  '해열제 기록 고치기': 'Edit medicine record',
  '{name} 해열제': '{name} · fever medicine',
  '어떤 약': 'Which medicine',
  '약은 설정 → 내 약에서 더하거나(국내 제품 목록에서 고를 수 있어요) 함량을 고칩니다. <b>포장에 적힌 성분 · 함량</b>과 같은지 확인하세요. 이름이 같아도 성분이 다른 약이 있어요.':
    'Add medicines or fix their strength in Settings → My medicines (you can pick from Korean products). Check that it matches <b>the ingredient and strength on the package</b>. Some medicines share a name but not an ingredient.',
  '먹인 양': 'Amount given',
  '먹인 양 — 눌러서 바로 칠 수 있어요': 'Amount given — tap to type',
  '양 줄이기': 'Less',
  '양 늘리기': 'More',
  '예: 반쯤 토함': 'e.g. spat out about half',
  '<b>종합감기약</b>은 포장의 나이별 표대로 먹이세요. 든 {ing}은 해열제 기록에 함께 보여요. 다른 성분(코 · 기침약)의 하루 횟수는 포장을 따르세요.':
    'Give <b>combination cold medicines</b> as the age table on the package says. Its {ing} shows in the fever medicine log. For the other ingredients (nose, cough), follow the package for how often a day.',
  '먹인 양을 그대로 넣어 주세요. 먹일 양은 <b>포장 설명서</b>(나이 · 체중별 표)와 의사 · 약사의 지시를 따르세요.':
    'Enter the amount you actually gave. For how much to give, follow <b>the package leaflet</b> (age and weight table) and your doctor or pharmacist.',
  '먹인 양을 넣어 주세요.': 'Enter the amount given.',
  '{med} {amount} 기록했어요.': '{med} {amount} logged.',
  '가족에게': 'To family',
  '1개 {mg}mg': '{mg}mg each',
  '종합감기약': 'Combination cold medicine',
  '증상 고치기': 'Edit symptoms',
  '{name} 증상': '{name} · symptoms',
  '있는 것 모두': 'Choose all that apply',
  '<span style="color:var(--high);font-weight:700">빨간 테두리</span>는 바로 병원에 가야 할 수 있는 증상이에요.':
    'Symptoms with a <span style="color:var(--high);font-weight:700">red border</span> may need a hospital right away.',
  '그 밖의 일': 'Other events',
  '예방접종 뒤 하루 이틀은 열이 날 수 있어요. 진료 때 함께 알려 주세요.': 'A fever for a day or two after a vaccine can happen. Mention it at the visit.',
  '예: 물 200mL 마심, 기저귀 3번': 'e.g. drank 200mL, 3 wet diapers',
  '증상을 고르거나 메모를 적어 주세요.': 'Choose a symptom or write a note.',
  '증상을 기록했어요.': 'Symptoms logged.',
  '{name} 정보': '{name} · details',
  '이름 · 애칭': 'Name or nickname',
  '예: 하율': 'e.g. Hayul',
  '생년월일': 'Date of birth',
  '포장 설명서의 먹이는 나이 · 바로 병원에 가야 할 때를 함께 알려 드려요.': 'Used to show the age on the package and when to go to hospital right away.',
  '몸무게 (kg)': 'Weight (kg)',
  '예: 12.5': 'e.g. 12.5',
  '진료용 요약에 적어요. 포장 설명서의 체중별 표를 볼 때도 최근 몸무게로 보세요.': 'Shown in the doctor’s summary. Use a recent weight when reading the weight table on a package.',
  '(마지막으로 고친 날 {date})': '(last updated {date})',
  '열성 경련을 한 적 있어요': 'Has had a febrile seizure',
  '진료용 요약에 함께 적어요.': 'Included in the doctor’s summary.',
  '알레르기 · 복용 중인 약 (선택)': 'Allergies · current medicines (optional)',
  '예: 아목시실린 알레르기': 'e.g. amoxicillin allergy',
  '이 아이 지우기': 'Delete this child',
  '더하기': 'Add',
  '이름을 넣어 주세요.': 'Enter a name.',
  '생년월일을 확인해 주세요.': 'Please check the date of birth.',
  '몸무게는 2~80kg 사이로 넣어 주세요.': 'Enter a weight between 2 and 80kg.',
  '저장했어요.': 'Saved.',
  '{name}을(를) 더했어요.': '{name} added.',
  '{name} 지우기': 'Delete {name}',
  '지우기': 'Delete',
  '{name}의 기록 {n}건도 함께 지워지고 되돌릴 수 없어요. 먼저 설정 → 백업 파일 저장을 해 두세요.':
    '{name}’s {n|record|records} will also be deleted and cannot be restored. Save a backup in Settings first.',
  '지웠어요.': 'Deleted.',
  '제품에서 고르기': 'Pick a product',
  '{group} 제품': '{group} products',
  '이미 있음': 'already added',
  '목록에 없는 약은 아래에 직접 넣으세요. 골랐다면 <b>포장의 성분 · 함량</b>과 같은지 꼭 확인하세요.':
    'Not in the list? Enter it below. If you picked one, make sure it matches <b>the ingredient and strength on the package</b>.',
  '약 고치기': 'Edit medicine',
  '이름': 'Name',
  '예: 집에 있는 해열제 시럽': 'e.g. the fever syrup at home',
  '성분': 'Ingredient',
  '단위': 'Form',
  '시럽 (mL)': 'Syrup (mL)',
  '좌약 · 알약 (개)': 'Suppository · tablet (pc)',
  '포장 · 설명서에 적힌 대로. 시럽은 「1mL 에 몇 mg」(예: 160mg/5mL → 32), 좌약 · 알약은 「1개에 몇 mg」. 아세트아미노펜이 든 종합감기약도 여기 더하면 함께 셉니다.':
    'As printed on the package. For syrup, mg per 1mL (e.g. 160mg/5mL → 32); for suppositories and tablets, mg per piece. Cold medicines with acetaminophen can be added here too and are counted together.',
  '종합감기약이에요': 'It is a combination cold medicine',
  '코 · 기침약 같은 다른 성분도 든 약 — 양은 포장 표대로, 앱은 해열 성분만 셉니다.':
    'Also contains other ingredients (nose, cough). Give as the package table says; the app counts only the fever ingredient.',
  '하루 최대 횟수 (선택)': 'Max times a day (optional)',
  '포장에 적힌 하루 횟수': 'Times a day on the package',
  '포장에 「1일 2~3회」처럼 적혀 있으면 큰 수(3)를 넣으세요. 좌약은 시럽보다 적은 경우가 많아요. 비워 두면 성분의 하루 횟수만 셉니다.':
    'If the package says “2–3 times a day”, enter the larger number (3). Suppositories often allow fewer than syrups. Leave empty to use only the ingredient’s daily count.',
  '이 약 지우기': 'Delete this medicine',
  '함량 (mg/mL)': 'Strength (mg/mL)',
  '함량 (1개에 mg)': 'Strength (mg per piece)',
  '함량을 확인해 주세요.': 'Please check the strength.',
  '하루 최대 횟수는 1~6 사이로 넣어 주세요.': 'Enter a daily maximum between 1 and 6.',
  '지웠어요. 지난 기록은 그대로 있어요.': 'Deleted. Past records stay as they are.',

  // ── 진료용 요약 글 · 가족에게 ──
  '최근 {h}시간 기록': 'last {h} hours',
  '열성 경련 과거력 있음': 'History of febrile seizure',
  '참고: {note}': 'Note: {note}',
  '열 시작: {at} ({h}시간째)': 'Fever began: {at} ({h}h so far)',
  '최고 체온: {max}℃ ({maxAt}) · 마지막: {last}℃ ({lastAt})': 'Highest: {max}℃ ({maxAt}) · Latest: {last}℃ ({lastAt})',
  '체온 기록 없음': 'No temperature records',
  '소변 {n}번 · 마지막 {at}': 'Pee {n|time|times} · last {at}',
  '물 마심 {n}번 · 마지막 {at}': 'Drank {n|time|times} · last {at}',
  '해열제 {n}번': 'Fever medicine: {n|dose|doses}',
  '열지기 앱 기록': 'Recorded with Yeoljigi',
  '{at} {med} {amount} 먹였어요': 'Gave {med} {amount} at {at}',
  '마지막 체온 {temp}℃ ({at})': 'Last temperature {temp}℃ ({at})',
  '계열마다 마지막으로 먹인 때': 'Last dose in each family',
  '{at} (24시간 {n}번)': '{at} ({n} in 24h)',
  '다음 약은 포장 설명서의 간격을 확인하고 먹여 주세요.': 'Check the interval on the package before the next dose.',
  '마지막 소변 {at}': 'Last pee {at}',
  '{at} 기록 기준 · 열지기': 'As of {at} · Yeoljigi',
  '{name} 체온 재기': 'Check {name}’s temperature',
  '해열제를 먹인 지 1시간 — 체온을 다시 재 보세요.': 'It has been 1 hour since the medicine — check the temperature again.',

  // ── 그래프 ──
  '아세트아미노펜': 'Acetaminophen',
  '이부프로펜 계열': 'Ibuprofen family',
  '38℃ 이상': '38℃ or higher',
  '이 기간의 기록이 없어요': 'No records in this period',
  '최근 {h}시간 체온 {n}번, 가장 높은 {max}도, 해열제 {meds}번':
    'Last {h} hours: {n|temperature|temperatures}, highest {max} degrees, {meds|medicine dose|medicine doses}',
  '최근 {h}시간 기록 없음': 'No records in the last {h} hours',
  '최근 {h}시간 · 열지기': 'last {h} hours · Yeoljigi',

  // ── 시간 · 창 ──
  '오늘': 'Today',
  '어제': 'Yesterday',
  '방금': 'just now',
  '{h}시간 {m}분 전': '{h}h {m}m ago',
  '{h}시간 전': '{h}h ago',
  '{n}일 전': '{n|day|days} ago',
  '{n}분': '{n} min',
  '{h}시간 {m}분': '{h}h {m}m',
  '닫기': 'Close',
  '복사했어요. 카카오톡 대화방에 붙여 넣으세요.': 'Copied. Paste it into your chat.',
  '보내지 못했어요. 진료용 요약에서 복사해 주세요.': 'Could not send. Copy it from the doctor’s summary.',
  '그림을 저장했어요.': 'Image saved.',
  '확인': 'OK',
  '취소': 'Cancel',

  // ── 나이 · 체온 안내 · 기록과 설명서 견주기 · 짚어 줄 것(js/dose.js) ──
  '{m}개월': '{m} mo',
  '{y}세 {m}개월': '{y} yr {m} mo',
  '{y}세': '{y} yr',
  '생후 3개월 미만은 해열제보다 진료가 먼저입니다. 열이 나면 바로 병원에 가세요.':
    'Under 3 months old, seeing a doctor comes before fever medicine. With a fever, go to hospital right away.',
  '{name}은(는) 보통 생후 {m}개월부터 먹입니다. 그 전에는 의사와 상의하세요.': '{name} is usually given from {m} months of age. Before that, ask a doctor.',
  '체온이 낮게 나왔어요. 몸을 따뜻하게 하고 다시 재 보세요.': 'The reading is low. Keep your child warm and measure again.',
  '열이 없어요. 잘 먹고 노는지 아이 상태를 함께 살펴 주세요.': 'No fever. Keep an eye on whether your child eats and plays well.',
  '너무 껴입히지도 벗기지도 말고 물을 자주 먹이세요. 1~2시간 뒤 다시 재 보세요.':
    'Don’t over-bundle or strip off clothes, and offer drinks often. Measure again in 1–2 hours.',
  '물을 자주 먹이세요. 해열제는 열을 내리려는 것이 아니라 아이가 힘들어할 때 편하게 해 주려고 먹여요. 처지거나 잘 깨지 않으면 해열제보다 진료가 먼저예요. 해열제를 먹였다면 1시간쯤 뒤 다시 재 보세요. 숫자보다 아이의 상태가 더 중요해요.':
    'Offer drinks often. Fever medicine is not for bringing the number down — it is to make your child comfortable when they feel unwell. If they are floppy or hard to wake, see a doctor before anything else. If you gave medicine, measure again in about 1 hour. How your child is doing matters more than the number.',
  '만 {y}세': 'age {y}',
  '생후 {m}개월': '{m} months',
  '이 약은 포장에 {from}부터라고 적혀 있어요. 먹이기 전에 의사 · 약사와 상의하세요.':
    'The package says this medicine is for {from} and up. Ask a doctor or pharmacist before giving it.',
  '마지막 체온이 {temp}℃예요. 열 때문이라면 아이가 힘들어할 때만 먹여도 돼요.':
    'The last temperature was {temp}℃. If this is for fever, it is only needed when your child is uncomfortable.',
  '수두일 때는 이부프로펜 계열을 피하도록 권해요. 먹이기 전에 의사 · 약사와 상의하세요.':
    'With chickenpox, the ibuprofen family is usually avoided. Ask a doctor or pharmacist before giving it.',
  '{tags} 기록이 있어요. 물을 잘 못 먹거나 소변이 줄었다면 이부프로펜 계열은 의사 · 약사와 먼저 상의하세요.':
    '{tags} was logged. If your child is not drinking well or peeing less, ask a doctor or pharmacist first about the ibuprofen family.',
  '같은 계열 약 기록이 {gap} 전에 있어요. 간격 안내는 {need}시간 이상이에요.': 'A medicine of the same family was logged {gap} before. The label interval is {need}h or more.',
  '이 시각 {gap} 뒤에 같은 계열 약 기록이 있어요. 간격 안내는 {need}시간 이상이에요.':
    'A medicine of the same family was logged {gap} after this time. The label interval is {need}h or more.',
  '다른 계열 약 기록이 {gap} 전에 있어요. 번갈아 먹이기는 의사 · 약사와 상의하세요.':
    'A medicine of the other family was logged {gap} before. Talk to a doctor or pharmacist about alternating.',
  '다른 계열 약 기록이 {gap} 뒤에 있어요. 번갈아 먹이기는 의사 · 약사와 상의하세요.':
    'A medicine of the other family was logged {gap} after. Talk to a doctor or pharmacist about alternating.',
  '24시간 안 같은 계열 {n}번째 기록이에요. 설명서는 하루 {max}번까지예요.': 'This is record no. {n} of this family within 24h. The leaflet says up to {max} a day.',
  '24시간 안 이 약 {n}번째 기록이에요. 내 약 설정은 하루 {max}번까지예요.': 'This is record no. {n} of this medicine within 24h. Your setting says up to {max} a day.',
  '생후 3개월 미만의 열': 'Fever under 3 months old',
  '해열제를 먹이기 전에 바로 병원(응급실)에 가세요.': 'Go to hospital (emergency room) right away, before giving fever medicine.',
  '생후 3~6개월 · 39℃ 이상': '3–6 months old · 39℃ or higher',
  '오늘 안에 진료를 받으세요.': 'See a doctor today.',
  '바로 병원에 가거나 119 에 전화하세요.': 'Go to hospital now or call 119.',
  '40℃ 이상': '40℃ or higher',
  '해열제를 먹인 뒤에도 떨어지지 않거나 아이가 처지면 진료를 받으세요.': 'See a doctor if it doesn’t come down after medicine or your child is floppy.',
  '열이 5일 넘게 이어짐': 'Fever for more than 5 days',
  '꼭 진료를 받아 원인(가와사키병 등)을 확인하세요.': 'Be sure to see a doctor to find the cause (such as Kawasaki disease).',
  '열이 하루 넘게 이어짐': 'Fever for more than a day',
  '두 돌 전 아이는 열이 24시간 넘게 이어지면 진료를 받아 보세요.': 'Under 2 years old, see a doctor if a fever lasts more than 24 hours.',
  '열이 3일 넘게 이어짐': 'Fever for more than 3 days',
  '열이 72시간 넘게 이어지면 진료를 받아 원인을 확인하세요.': 'If a fever lasts more than 72 hours, see a doctor to find the cause.',
  '열성 경련을 한 적 있는 아이': 'Has had a febrile seizure',
  '해열제로 경련을 미리 막을 수는 없어요. 경련이 5분 넘게 이어지거나, 처음 보는 모습이면 119 에 전화하세요.':
    'Fever medicine cannot prevent seizures. Call 119 if a seizure lasts more than 5 minutes or looks different from before.',
  '소변 기록이 {h}시간째 없음': 'No pee logged for {h}h',
  '소변을 봤다면 「소변」을 눌러 남겨 주세요. 정말 8시간 넘게 보지 않았거나 입이 마르고 울어도 눈물이 없으면 바로 진료를 받으세요.':
    'If your child peed, tap “Pee” to log it. If they really haven’t for over 8 hours, or have a dry mouth and no tears when crying, see a doctor right away.',
  '체온이 낮음': 'Low temperature',
  '다시 재 보고, 그래도 35.5℃ 아래면 진료를 받으세요.': 'Measure again. If it is still below 35.5℃, see a doctor.',

  // ── 성분 · 설명서 문구(js/dose.js) ──
  '아세트아미노펜 계열': 'Acetaminophen family',
  '이부프로펜': 'Ibuprofen',
  '덱시부프로펜': 'Dexibuprofen',
  '체중 1kg에 10~15mg': '10–15mg per kg of body weight',
  '하루 5번까지 · 하루 합계 체중 1kg에 75mg 넘지 않게': 'Up to 5 times a day · no more than 75mg per kg in total a day',
  '4~6시간마다': 'Every 4–6 hours',
  '포장의 나이별 표': 'Age table on the package',
  '하루 4번까지 · 나이별 하루 최대량': 'Up to 4 times a day · daily maximum by age',
  '6~8시간(식약처 안내)': '6–8 hours (MFDS guidance)',
  '체중 1kg에 5~7mg': '5–7mg per kg of body weight',
  '하루 4번까지 · 하루 합계 체중 1kg에 28mg, 체중 30kg 이하는 300mg 넘지 않게':
    'Up to 4 times a day · no more than 28mg per kg in total a day, and no more than 300mg for 30kg or less',

  // ── 국내 제품(포장의 한국어 이름을 옮겨 적음) ──
  '어린이타이레놀현탁액': 'Children’s Tylenol Suspension',
  '챔프시럽': 'Champ Syrup',
  '챔프이부펜시럽과 성분이 달라요': 'Different ingredient from Champ Ibupen Syrup',
  '콜대원키즈펜시럽': 'Coldaewon Kids Pen Syrup',
  '콜대원키즈이부펜 · 콜대원키즈콜드(감기약)와 성분이 달라요': 'Different ingredient from Coldaewon Kids Ibupen and Coldaewon Kids Cold (cold medicine)',
  '세토펜현탁액': 'Setopen Suspension',
  '써스펜키즈시럽': 'Suspen Kids Syrup',
  '복합써스펜좌약과 다른 시럽이에요': 'A different product from Suspen Compound Suppository',
  '어린이용타이레놀정 80mg': 'Children’s Tylenol Tablet 80mg',
  '복합써스펜좌약 125mg': 'Suspen Compound Suppository 125mg',
  '어린이부루펜시럽': 'Children’s Brufen Syrup',
  '챔프이부펜시럽': 'Champ Ibupen Syrup',
  '챔프시럽과 성분이 달라요': 'Different ingredient from Champ Syrup',
  '콜대원키즈이부펜시럽': 'Coldaewon Kids Ibupen Syrup',
  '콜대원키즈펜과 성분이 달라요': 'Different ingredient from Coldaewon Kids Pen',
  '키즈앤펜시럽': 'Kids&Pen Syrup',
  '맥시부펜시럽': 'Maxibupen Syrup',
  '이부프로펜 계열이에요': 'Ibuprofen family',
  '애니펜시럽': 'Anypen Syrup',
  '챔프콜드펜시럽': 'Champ Coldpen Syrup',
  '종합감기약 · 1포 5mL': 'Cold medicine · 5mL sachet',
  '챔프콜드펜하이시럽': 'Champ Coldpen High Syrup',
  '종합감기약 · 1포 10mL': 'Cold medicine · 10mL sachet',
  '콜대원키즈콜드에스시럽': 'Coldaewon Kids Cold S Syrup',
  '아세트아미노펜 시럽': 'Acetaminophen syrup',
  '이부프로펜 시럽': 'Ibuprofen syrup',
  '덱시부프로펜 시럽': 'Dexibuprofen syrup',
  'mL': 'mL',
  '개': 'pc',

  // ── 체온 구간 · 잰 곳 · 증상 · 아이 상태(저장은 한국어 그대로) ──
  '낮음': 'Low',
  '정상': 'Normal',
  '미열': 'Low-grade',
  '열': 'Fever',
  '고열': 'High fever',
  '매우 높음': 'Very high',
  '귀': 'Ear',
  '겨드랑이': 'Armpit',
  '이마': 'Forehead',
  '입': 'Mouth',
  '항문': 'Rectal',
  '기침': 'Cough',
  '콧물': 'Runny nose',
  '코막힘': 'Stuffy nose',
  '목 아픔': 'Sore throat',
  '구토': 'Vomiting',
  '설사': 'Diarrhea',
  '배 아픔': 'Tummy ache',
  '발진': 'Rash',
  '오한': 'Chills',
  '두통': 'Headache',
  '귀 아픔': 'Ear pain',
  '잘 안 먹음': 'Not eating well',
  '잘 못 잠': 'Not sleeping well',
  '보챔': 'Fussy',
  '수두': 'Chickenpox',
  '경련': 'Seizure',
  '숨쉬기 힘듦': 'Trouble breathing',
  '축 처짐': 'Floppy, hard to wake',
  '소변 줄어듦': 'Peeing less',
  '누르면 안 없어지는 발진': 'Rash that doesn’t fade when pressed',
  '소변 봄': 'Peed',
  '물 마심': 'Drank',
  '예방접종 맞음': 'Had a vaccine',
  '병원 다녀옴': 'Saw a doctor',
  '어린이집 · 유치원 쉼': 'Stayed home from daycare',
  '많이 힘들어함': 'Very unwell',
  '힘들어함': 'Unwell',
  '괜찮음': 'Good',
  '잘 놂': 'Playing well',

  // 식약처 「의료기기와 개인용 건강관리(웰니스)제품 판단기준」 Ⅴ.3 권고 문구 — 화면에는 한국어 원문을 함께 둔다
  '본 제품은 의료기기가 아니므로 질병 유무를 판단할 수 없으며, 질병 유무 판단을 위해서는 의사의 검진이 필요합니다.':
    'This product is not a medical device and cannot determine whether a disease is present. A doctor’s examination is needed for that.',
};

// 도움말 창 · 약 안내 「꼭 확인하세요」 — 한국어 글(js/app.js)과 같은 내용. 숫자를 바꾸면 둘 다(CLAUDE.md 「도움말 문구는 같이 고친다」).
export const HELP_EN = {
  check: () => `<ul><li>Check that the <b>strength on the package</b> matches the strength above. The same ingredient can differ by product (fix it in Settings → My medicines).</li>
    <li>Some medicines <b>share a name but not an ingredient</b> (e.g. Champ Syrup is acetaminophen, Champ Ibupen Syrup is ibuprofen). Look at the <b>ingredient name</b> on the package.</li>
    <li><b>Combination cold medicines</b> (Champ Coldpen, Coldaewon Kids Cold S, etc.) also contain acetaminophen. If you gave one, add it in Settings → My medicines and log it as a fever medicine — it then shows in the fever medicine log on Home.</li>
    <li>Shake suspensions (syrups) well before giving.</li>
    <li>Measure syrup with a <b>marked oral syringe</b> rather than a cup — mistakes are much rarer.</li>
    <li>Don’t give both families at the same time. Alternating is only for a child who stays uncomfortable, and only after talking to a doctor or pharmacist.</li>
    <li>Always log what you gave as “Medicine” — so other caregivers know what was given when.</li></ul>`,

  er: () => `<div class="prose">
    <h3>Emergency room or 119 now</h3><ul>
      <li>A baby under 3 months old with 38℃ or higher</li><li>A seizure (including a febrile seizure) · drowsy, or hard to wake</li>
      <li>Struggling to breathe · grunting when breathing · blue lips</li>
      <li>Pale or blotchy skin · a weak, high-pitched or continuous cry</li>
      <li>Red or purple spots that don’t fade when pressed</li><li>A bulging soft spot (fontanelle) · stiff neck · bad headache · vomiting again and again</li>
      <li>Much less pee (none for 6–8 hours) · a very dry mouth · no tears when crying</li></ul>
    <h3>See a doctor</h3><ul>
      <li>Fever for more than 24 hours under 2 years old, or more than 3 days (72 hours) after that — always after <b>5 days</b></li>
      <li>A baby 3–6 months old with 39℃ or higher · any fever at 3–6 months</li>
      <li>40℃ or higher, or it barely comes down with medicine · playing much less than usual</li>
      <li>The fever went away and came back · ear pain · pain when peeing</li></ul>
    <h3>Good to know</h3><ul>
      <li>Fever medicine does not prevent febrile seizures. Call 119 if a seizure lasts more than 5 minutes or is the first one.</li>
      <li>Sponging with lukewarm water is not advised. Don’t over-bundle or strip off clothes.</li>
      <li>Under 4 weeks old, use an electronic thermometer in the armpit; after that, the ear or armpit. Forehead strip thermometers are unreliable.</li></ul>
    <p>At night or on holidays, look for a nearby <b>Moonlight Children’s Hospital</b> (<span lang="ko">달빛어린이병원</span>, night and holiday pediatric care) on the
      <a href="https://www.e-gen.or.kr/moonlight/main.do" target="_blank" rel="noopener">Korean emergency medical portal</a> (in Korean).
      For emergencies and medical advice call <a href="tel:119">119</a>; for open hospitals and pharmacies, <a href="tel:129">129</a> (Health and Welfare Call Center).
      For mild symptoms, a local clinic or a Moonlight Children’s Hospital comes before the emergency room.</p>
    <p class="faint small">General guidance, based on the UK NICE guideline “Fever in under 5s” and American Academy of Pediatrics advice.
      If you are worried about your child, see a doctor whether or not it is on this list.</p></div>`,

  dose: () => `<div class="prose">
    <h3>There are two families</h3><ul>
      <li><b style="color:var(--apap)">Acetaminophen family</b> — 4–6 hours apart, up to 5 times in 24 hours</li>
      <li><b style="color:var(--nsaid)">Ibuprofen family</b> (ibuprofen · dexibuprofen) — 6–8 hours apart, up to 4 times in 24 hours.
        Ibuprofen and dexibuprofen are the same family, so they must not be alternated with each other.</li></ul>
    <h3>When is fever medicine for?</h3>
    <p>It is not for bringing the temperature down to a number — it is to make your child comfortable <b>when they feel unwell</b>. There is no need
      to wake a sleeping child for it. <b>Don’t give both families at the same time</b>.</p>
    <h3>Alternating (switching between families)</h3>
    <p>This is only something to consider when your child <b>stays uncomfortable</b> after one family and it is not yet time for the same medicine again.
      Leave <b>at least 2 hours</b> after the previous medicine, and keep each family’s interval and daily count separately. It is easy to give too much
      by mistake, so always log it, and decide together with a doctor or pharmacist.</p>
    <h3>Before the ibuprofen family</h3>
    <p>With chickenpox, or when vomiting or diarrhea means your child is drinking poorly and peeing less, ask a doctor or pharmacist before the ibuprofen family.</p>
    <h3>Measuring</h3>
    <p>Syrup is measured more accurately with a <b>marked oral syringe</b> than with a cup. Measure in mL, not “teaspoons”.</p>
    <h3>What this app shows</h3>
    <p>“Fever medicine log” on Home shows, for each family, when it was last given, the time since then, and the count in 24 hours. The app does not decide
      whether or how much to give — compare with the interval and amount on the package, and ask a doctor or pharmacist if unsure. Medicines you
      didn’t log don’t appear.</p>
    <p class="faint small">The numbers are the general range in Korean children’s fever medicine leaflets. Guidance is based on the NICE guideline, an American
      Academy of Pediatrics report (2011), a Cochrane review (2013) and MFDS guidance (2025). Suppositories often allow fewer doses a day than syrups —
      enter the “Max times a day” in Settings → My medicines. The product leaflet and your doctor or pharmacist come first.</p></div>`,

  fever: () => `<div class="prose">
    <h3>Fever is the body fighting back</h3>
    <p>The body raises its own temperature to fight germs. Fever itself does not damage the brain (below 42℃).</p>
    <h3>The goal is comfort, not a normal number</h3>
    <p>Fever medicine is to make your child comfortable when they feel unwell. A drop of about 1–1.5℃ is usual, and if it doesn’t come down, don’t give
      more right away. There is no need to wake a sleeping child for it.</p>
    <h3>Fever medicine doesn’t prevent seizures</h3>
    <p>Febrile seizures are frightening but usually stop within a few minutes. Giving medicine ahead of time is known not to prevent them.
      Call 119 if one lasts more than 5 minutes or is the first one.</p>
    <h3>It reads higher at night</h3>
    <p>Fever is often higher in the evening and at night and lower in the morning. Lower in the morning doesn’t always mean it’s over.</p>
    <h3>Watch your child, not the number</h3>
    <p>Whether they eat and drink, smile while playing, and pee matters more than the number. If they are floppy or hard to wake, see a doctor first.</p>
    <p class="faint small">General guidance based on NICE “Fever in under 5s” (2019), American Academy of Pediatrics advice, a systematic review of fever
      phobia (Clericetti 2019) and the FeverApp study (Beerenbrock 2026).</p></div>`,

  about: ({ repo, sponsor, version, notDevice }) => `<div class="prose">
    <p>A notebook for logging temperature, fever medicine and symptoms when a child has a fever. It shares what was given and when with your family,
      and shows what the medicine’s package leaflet says. It does not calculate amounts or times.</p>
    <h3>Where are records kept?</h3>
    <p>Only in this phone’s browser. Nothing is sent anywhere. So clearing browser data or changing phones can lose them —
      now and then, use Settings → <b>Save a backup file</b>.</p>
    <h3>Seeing records together with family</h3>
    <p>Settings → <b>Send a records link</b> puts the last 3 days into a link you can send by KakaoTalk or any chat. When the other person opens it and taps
      “Merge”, the records are added to their phone. Send both ways and the two phones match. The link doesn’t go through a server but it stays in
      the chat — send it to family only.</p>
    <h3>Not medical advice</h3>
    <p>This app does not diagnose or prescribe. Doses and intervals are the general content of package leaflets; the leaflet of the medicine in your hand
      and your doctor or pharmacist come first.</p>
    <p>${notDevice}</p>
    <h3>Who made it?</h3>
    <p>A free app made by one person. No ads or sign-up, and the code is open on <a href="${repo}" target="_blank" rel="noopener">GitHub</a> (MIT).
      It takes no sponsorship from drug companies or pharmacies. If it helped, you can <a href="${sponsor}" target="_blank" rel="noopener">support</a> it.</p>
    <p>The English version is for families living in Korea — products, phone numbers and guidance are Korean.</p>
    <p class="faint small">Version ${version}</p></div>`,
};
