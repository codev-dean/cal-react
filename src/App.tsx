import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal?.("ui", {
        theme: "dark",
        styles: {
          branding: { brandColor: "#000000" }
        },
      });

      cal?.('on', {
        action: 'bookingSuccessful',
        callback: ({ detail }: { detail: Record<string, string> }) => {
          console.log(detail);
        }
        // callback: ({
        //   confirmed,
        //   eventType,
        //   date,
        //   duration,
        //   organizer
        // }: {
        //   confirmed: boolean,
        //   eventType: any,
        //   date: string,
        //   duration: number,
        //   organizer: any
        // }) => console.log({
        //   confirmed,
        //   eventType,
        //   date,
        //   duration,
        //   organizer
        // })
        // callback: (e: any) => {
        //   console.log('callback', e)
        // }
      })
    })();
  }, []);
  return (
    <div className="App" style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button data-cal-link="rick" style={{ padding: 24 }}>
        I am an existing button on your website
      </button>
    </div>
  );
}
