import type { Message } from '@/types';
import { cn } from '@/lib/utils';

interface MessageBubbleProps {
  message: Message;
  contactName?: string;
}

export function MessageBubble({ message, contactName }: MessageBubbleProps) {
  const isOutbound = message.direction === 'outbound';

  return (
    <div
      className={cn(
        "flex mb-4",
        isOutbound ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "max-w-[70%] rounded-md px-4 py-2",
          isOutbound
            ? "bg-[#e2001a] text-white"
            : "bg-gray-200 text-gray-900"
        )}
      >
        {!isOutbound && contactName && (
          <div className="text-xs font-semibold mb-1">{contactName}</div>
        )}
        <div className="text-sm">{message.content}</div>
        <div
          className={cn(
            "text-xs mt-1",
            isOutbound ? "text-white/70" : "text-gray-600"
          )}
        >
          {new Date(message.timestamp).toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
}


