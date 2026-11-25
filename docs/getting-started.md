# Getting Started

Allnstack has two parts: the **app** your team installs, and your agency’s **server**, which keeps the
team, the chats and the saved logins and connects everyone. The app always signs in to a server, so
before your team starts, the agency owner needs a server address.

## System Requirements

| | |
|---|---|
| System | Windows 10 or 11, 64-bit |
| Disk | About 500 MB |
| Internet | Needed while you work |
| Server | The address your agency gives you (for example `desk.youragency.com`) |

## Download

Get the latest installer from **[Releases](https://github.com/oserusapp-cyber/allnstack-releases/releases/latest)**:
the file is `Allnstack-Setup-<version>.exe`.

## Installation

1. Run `Allnstack-Setup-<version>.exe`.
2. The app isn’t code-signed yet, so Windows may show **“Windows protected your PC”**. Click
   **More info**, then **Run anyway**. You only see this once per version.
3. Choose where to install (the default is fine) and finish. Allnstack adds a desktop and Start menu
   shortcut.

## Connect to Your Server

The first time Allnstack opens, it asks for your **server address**.

1. Type the address you were given, such as `desk.youragency.com`. Allnstack adds `https://` for you.
2. Allnstack checks that the address answers as an Allnstack server, then shows the sign-in screen.
3. Sign in with the email and password your agency gave you.

You can change the server later in **Settings**. Changing it signs you out.

::: tip New agency?
If your server allows new agencies, the sign-in screen offers **Create agency**. The person who creates
it becomes the **owner**.
:::

## First Steps for Owners

1. **Add your team** in **Team**: give each person a role and a password, and choose which accounts
   and chats they can work.
2. **Add a model** in **Models**, then her accounts on each platform. Give each model her own proxy.
3. **Log the accounts in**, either in the live browser from the app, or by sending the creator a
   private one-time login link.
4. **Plan shifts** in **Shifts**, so chatters can work only during their hours.
5. Optional: in **Settings**, turn on **AI replies** with your own Claude API key, and **Run accounts on
   this PC** if some models should run on an office computer rather than on the server.

## Updates

Allnstack updates itself. New versions download in the background and install when you quit, or
straight away when you click **Restart to update** in the title bar.
