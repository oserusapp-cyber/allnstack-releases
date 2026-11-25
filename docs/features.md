# Features

## How It Fits Together

| Part | What it is | Who uses it |
|---|---|---|
| **The app** | The desktop app where your team works: chats, shifts, plans, settings | Everyone on the team |
| **The server** | Your agency’s central hub: the team, the chats, the rules and the history | Nobody directly; it runs in the background |
| **Account runners** | Open each model’s accounts in her own private browser identity, and send and receive messages | Run on the server, or on a PC you choose |

A **model** is a creator your agency manages; she has one browser identity and one proxy. An
**account** is that model on one platform, and a model can have several.

## Inbox and Chatting

| Feature | What it does |
|---|---|
| One inbox for all accounts | Every chat you may open, in one list; or pick a single account |
| Longest-waiting first | Waiting fans go on top, counted from their first unanswered message |
| Model and platform on every chat | You always know whose voice you’re replying in |
| Filters and search | All, Waiting, Unread, Mine, Requests; search by name, tag or message |
| Reply | Send as the model, with a natural typing pause; failed messages can be retried |
| Saved replies | Ready-made messages with `{fan}` and `{model}` filled in; type `/` to pick one |
| AI suggestions | Three drafts in your agency’s style; pick one, edit, send |
| Send later | Schedule a message for a set time from the chat |
| New chats and requests | Message someone new, and accept or decline chat requests |
| Fan tags and notes | Label fans (`vip`, `tipper`…) and keep team notes the fan never sees |
| Assign chats | Give a chat to one chatter; it shows as “Yours” for them |
| Who’s here | See who is reading or replying, so two people don’t answer the same fan |

## Models and Accounts

| Feature | What it does |
|---|---|
| Models and accounts | Add a model, then her accounts per platform |
| Where she runs | On the server, or on one of your PCs |
| Proxy per model | Her own internet address; the account won’t start if the proxy fails its check |
| Sending pace | Careful, Normal or Quick per account |
| Account health | Working, needs a login, restricted by the platform, or not started, with alerts to owners |
| Saved-login expiry | How long each login lasts, with a warning a week before |
| Live browser | Open her real browser from the app |
| Login links | A private one-time link (valid for 30 minutes) so the creator logs in herself |

## Team, Roles and Shifts

| | Owner | Admin | Manager | Chatter |
|---|:-:|:-:|:-:|:-:|
| Work every account and chat | ✓ | ✓ | ✓ | Only what you give them |
| Reply to fans | ✓ | ✓ | ✓ | If allowed |
| See and write notes on fans | ✓ | ✓ | ✓ | If allowed |
| Send mass messages | ✓ | ✓ | ✓ | If allowed, with a daily cap |
| Schedule posts | ✓ | ✓ | ✓ | |
| Use the media vault | ✓ | ✓ | ✓ | Only the folders you allow |
| Add chatters, set their access and shifts | ✓ | ✓ | Their own team | |
| Add models, accounts, proxies, login links | ✓ | ✓ | | |
| Read the audit log | All | All | Their team | |

- **Access per chatter, per account:** all chats, only assigned chats, or only fans with certain tags;
  reply or read only; notes on or off; mass messages with a daily cap; vault folders.
- **Teams:** group chatters, each team with a manager who runs their own people.
- **Rota:** shift types by day, one click to staff a shift, and uncovered shifts stand out.
- **Shift-locked access:** accounts open only during a person’s shift, plus 10 minutes to finish.
- **My work:** each person sees their shift, their chats, their access and their week’s numbers.

## Vault

Each model’s photos and videos in one private library with folders (JPG, PNG, WEBP, GIF, MP4, WEBM,
MOV, up to 25 MB each). Upload by drag and drop, preview in the app, and move files between folders.
Files are stored **encrypted** on your server, and chatters see only the folders you allow.

## Plan

Everything scheduled, by day: messages to send later, posts, and mass messages. Mass messages go to
all chats or to fans with chosen tags, one by one at a natural pace, with a preview of how many fans
they reach. Cancel or stop anything still waiting.

## Reports and Records

| Feature | What it does |
|---|---|
| Dashboard | Fans waiting, reply times, messages per day, per account and per team member, hours online |
| Audit log | Every sensitive action (access changes, sign-ins, mass messages, settings), permanent and filterable |
| Notifications | New fan messages, chats assigned to you, accounts needing attention, expiring logins |

## Safety and Privacy

| Risk | How Allnstack handles it |
|---|---|
| Accounts flagged as bots | Each model has her own browser identity and proxy, and sends at a human pace |
| A chatter leaking a password | Chatters never see passwords; logins are kept on the server, encrypted |
| Someone seeing chats they shouldn’t | The server checks access for every chat and every message |
| Working outside agreed hours | Shift-based access closes accounts automatically |
| “Who sent that?” | Every message shows who sent it, and the audit log records sensitive actions |
| A lost laptop | Disable the person or set a new password: they’re signed out everywhere at once |
| Data held by a third party | The server is yours; logins, proxies, AI keys and media are encrypted with your own key |

## Platforms

| Platform | Status |
|---|---|
| **Reddit** chat | Read and reply, new chats, chat requests |
| **More platforms** | Coming |
| **Test platform** | A built-in practice platform with pretend fans, for training and demos |
