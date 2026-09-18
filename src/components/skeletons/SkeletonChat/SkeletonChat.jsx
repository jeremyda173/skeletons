import styled from 'styled-components';
import SkeletonBase from '@/components/skeletons/SkeletonBase';

const ChatWrapper = styled.div`
  display: flex;
  height: 500px;
  width: 100%;
  background: ${props => props.theme?.cardBg || '#ffffff'};
  border: 1px solid ${props => props.theme?.cardBorder || '#e2e8f0'};
  border-radius: 12px;
  overflow: hidden;

  @media (prefers-color-scheme: dark) {
    background: ${props => props.theme?.cardBg || '#1e293b'};
    border-color: ${props => props.theme?.cardBorder || '#334155'};
  }
`;

const ContactList = styled.div`
  width: 280px;
  border-right: 1px solid ${props => props.theme?.cardBorder || '#e2e8f0'};
  display: none;
  flex-direction: column;

  @media (min-width: 640px) {
    display: flex;
  }
  
  @media (prefers-color-scheme: dark) {
    border-color: ${props => props.theme?.cardBorder || '#334155'};
  }
`;

const ContactHeader = styled.div`
  padding: 16px;
  border-bottom: 1px solid ${props => props.theme?.cardBorder || '#e2e8f0'};
  
  @media (prefers-color-scheme: dark) {
    border-color: ${props => props.theme?.cardBorder || '#334155'};
  }
`;

const ConversationArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ConversationHeader = styled.div`
  padding: 16px;
  border-bottom: 1px solid ${props => props.theme?.cardBorder || '#e2e8f0'};
  display: flex;
  align-items: center;
  gap: 12px;

  @media (prefers-color-scheme: dark) {
    border-color: ${props => props.theme?.cardBorder || '#334155'};
  }
`;

const MessagesArea = styled.div`
  flex: 1;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: ${props => props.theme?.controlBg || '#f8fafc'};

  @media (prefers-color-scheme: dark) {
    background: ${props => props.theme?.controlBg || '#0f172a'};
  }
`;

const MessageBubble = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 70%;
  align-self: ${props => props.isOwn ? 'flex-end' : 'flex-start'};
`;

const InputArea = styled.div`
  padding: 16px;
  border-top: 1px solid ${props => props.theme?.cardBorder || '#e2e8f0'};
  display: flex;
  gap: 12px;
  align-items: center;

  @media (prefers-color-scheme: dark) {
    border-color: ${props => props.theme?.cardBorder || '#334155'};
  }
`;

const SkeletonChat = ({ animation = 'shimmer' }) => {
  return (
    <ChatWrapper>
      <ContactList>
        <ContactHeader>
          <SkeletonBase width="100%" height="36px" radius="18px" animation={animation} />
        </ContactHeader>
        <div style={{ flex: 1, padding: '12px 0', overflowY: 'hidden' }}>
          {[...Array(6)].map((_, i) => (
            <div key={i} style={{ display: 'flex', gap: '12px', padding: '12px 16px', alignItems: 'center' }}>
              <SkeletonBase width="48px" height="48px" radius="50%" animation={animation} />
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <SkeletonBase width="40%" height="14px" animation={animation} />
                  <SkeletonBase width="20%" height="12px" animation={animation} />
                </div>
                <SkeletonBase width="80%" height="12px" animation={animation} />
              </div>
            </div>
          ))}
        </div>
      </ContactList>
      
      <ConversationArea>
        <ConversationHeader>
          <SkeletonBase width="40px" height="40px" radius="50%" animation={animation} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <SkeletonBase width="120px" height="14px" animation={animation} />
            <SkeletonBase width="80px" height="10px" animation={animation} />
          </div>
        </ConversationHeader>
        
        <MessagesArea>
          <MessageBubble isOwn={false}>
            <SkeletonBase width="240px" height="60px" radius="12px 12px 12px 0" animation={animation} />
          </MessageBubble>
          <MessageBubble isOwn={true}>
            <SkeletonBase width="180px" height="40px" radius="12px 12px 0 12px" animation={animation} />
          </MessageBubble>
          <MessageBubble isOwn={false}>
            <SkeletonBase width="300px" height="80px" radius="12px 12px 12px 0" animation={animation} />
          </MessageBubble>
          <MessageBubble isOwn={true}>
            <SkeletonBase width="140px" height="40px" radius="12px 12px 0 12px" animation={animation} />
          </MessageBubble>
        </MessagesArea>
        
        <InputArea>
          <SkeletonBase width="36px" height="36px" radius="50%" animation={animation} />
          <SkeletonBase width="100%" height="40px" radius="20px" animation={animation} />
          <SkeletonBase width="36px" height="36px" radius="50%" animation={animation} />
        </InputArea>
      </ConversationArea>
    </ChatWrapper>
  );
};

export default SkeletonChat;
